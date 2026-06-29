"use client";

import { useEffect, useMemo, useState } from "react";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { App_Text } from "@/components/ui_components/app_text";
import { App_Input } from "@/components/ui_components/app_input";
import { App_Button } from "@/components/ui_components/app_button";
import { getDataPlans, getTelecomNetworks, purchaseData } from "@/features/telecom/api/telecom_endpoints";
import { useRouter } from "next/navigation";

const NETWORKS = ["MTN", "Airtel", "9Mobile", "Glo"] as const;

type Plan = { code: string; name: string; amount: number };

export default function BuyDataPage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated, authenticatedRequest } = Use_Auth_Context();

  const [mobileNumber, setMobileNumber] = useState("");
  const [network, setNetwork] = useState<string>("");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [loadingPlans, setLoadingPlans] = useState(false);
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
        const list = (resp?.dataNetworks ?? []).map((n: any) => ({
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

  useEffect(() => {
    const loadPlans = async () => {
      if (!network) {
        setPlans([]);
        setSelectedPlan("");
        return;
      }
      setLoadingPlans(true);
      try {
        const resp = await getDataPlans(network);
        const raw = (resp as any)?.plans ?? [];
        const mapped: Plan[] = raw.map((p: any) => ({
          code: String(p.plan_code ?? p.planCode ?? p.code ?? p.name ?? Math.random()),
          name: String(p.name ?? p.description ?? p.plan_name ?? p.planCode ?? p.plan_code),
          amount: Number(p.amount ?? p.price ?? 0),
        }));
        setPlans(mapped);
      } catch (e) {
        setPlans([]);
      } finally {
        setLoadingPlans(false);
      }
    };
    void loadPlans();
  }, [network]);

  const canSubmit = useMemo(() => {
    return mobileNumber.trim().length >= 6 && network && selectedPlan;
  }, [mobileNumber, network, selectedPlan]);

  const handleSubmit = async () => {
    if (!authenticatedRequest) return;
    setLoading(true);
    setError(null);
    try {
      const internalReference = `dat-${Date.now().toString(36)}`;
      await purchaseData(authenticatedRequest, {
        internalReference,
        network,
        planCode: selectedPlan,
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
        <App_Text variant="title">Buy Data</App_Text>
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

            <div>
              <App_Text variant="caption">Select Plan</App_Text>
              <div className="mt-3 grid gap-3">
                {loadingPlans ? (
                  <div className="h-24 animate-pulse rounded-xl border border-border bg-surface" />
                ) : plans.length === 0 ? (
                  <App_Text variant="body" className="text-muted">
                    No plans available.
                  </App_Text>
                ) : (
                  plans.map((p) => (
                    <button
                      key={p.code}
                      type="button"
                      onClick={() => setSelectedPlan(p.code)}
                      className={[
                        "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all",
                        selectedPlan === p.code
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border bg-background hover:bg-primarySoft",
                      ].join(" ")}
                    >
                      <span className="truncate">{p.name}</span>
                      <span className="shrink-0 font-semibold text-secondary">₦{p.amount.toLocaleString("en-NG")}</span>
                    </button>
                  ))
                )}
              </div>
            </div>

            {error ? (
              <p className="text-sm text-error">{error}</p>
            ) : null}

            <App_Button
              onClick={handleSubmit}
              disabled={!canSubmit}
              loading={loading}
              className="w-full"
            >
              Buy Data
            </App_Button>
          </div>
        </section>
      </div>
    </main>
  );
}
