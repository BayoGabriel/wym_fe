"use client";

import { useEffect, useMemo, useState } from "react";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { App_Text } from "@/components/ui_components/app_text";
import { App_Input } from "@/components/ui_components/app_input";
import { App_Button } from "@/components/ui_components/app_button";
import { getTelecomNetworks, purchaseAirtime } from "@/features/telecom/api/telecom_endpoints";
import { useRouter } from "next/navigation";

const NETWORKS = ["MTN", "Airtel", "9Mobile", "Glo"] as const;

export default function BuyAirtimePage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated, authenticatedRequest } = Use_Auth_Context();

  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [network, setNetwork] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [networks, setNetworks] = useState<Array<{ name?: string; code?: string }>>([]);

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) router.replace("/auth/login");
  }, [isAuthenticated, isHydrated, router]);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const resp = await getTelecomNetworks();
        const list = (resp?.airtimeNetworks ?? []).map((n: any) => ({
          name: String(n.name ?? n.network ?? n.code ?? n),
          code: String(n.code ?? n.network ?? n.name ?? n),
        }));
        setNetworks(list);
      } catch {
        setNetworks(NETWORKS.map((n) => ({ name: n, code: n })));
      }
    };
    void bootstrap();
  }, []);

  const canSubmit = useMemo(() => {
    return mobileNumber.trim().length >= 6 && amount > 0 && network;
  }, [mobileNumber, amount, network]);

  const handleSubmit = async () => {
    if (!authenticatedRequest) return;
    setLoading(true);
    setError(null);
    try {
      const internalReference = `air-${Date.now().toString(36)}`;
      await purchaseAirtime(authenticatedRequest, {
        internalReference,
        network,
        amount: Number(amount),
        mobileNumber,
      });
      router.push("/dashboard/transactions");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unable to complete purchase";
      if (/insufficient/i.test(msg)) {
        router.push("/dashboard/fund");
        return;
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-2xl">
        <App_Text variant="title">Buy Airtime</App_Text>
        <section className="mt-6 rounded-3xl border border-border bg-surface p-6 shadow-panel/10">
          <div className="grid gap-5">
            <div>
              <App_Text variant="caption">Select Network</App_Text>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {networks.map((n) => (
                  <button
                    key={n.code}
                    type="button"
                    onClick={() => setNetwork(n.code!)}
                    className={[
                      "flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-all",
                      network === n.code
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border bg-background hover:bg-primarySoft",
                    ].join(" ")}
                  >
                    <span className="size-6 rounded-full bg-border" aria-hidden />
                    <span className="truncate">{n.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <App_Input
              id="mobileNumber"
              label="Mobile Number"
              type="tel"
              placeholder="e.g. 08012345678"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.currentTarget.value)}
            />

            <App_Input
              id="amount"
              label="Amount (NGN)"
              type="number"
              min={50}
              step={50}
              placeholder="e.g. 500"
              value={amount ? String(amount) : ""}
              onChange={(e) => setAmount(Number(e.currentTarget.value || 0))}
            />

            {error ? (
              <p className="text-sm text-error">{error}</p>
            ) : null}

            <App_Button
              onClick={handleSubmit}
              disabled={!canSubmit}
              loading={loading}
              className="w-full"
            >
              Buy Airtime
            </App_Button>
          </div>
        </section>
      </div>
    </main>
  );
}
