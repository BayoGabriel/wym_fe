"use client";

import { useEffect, useMemo, useState } from "react";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { App_Text } from "@/components/ui_components/app_text";
import { App_Input } from "@/components/ui_components/app_input";
import { App_Button } from "@/components/ui_components/app_button";
import {
  getTelecomNetworks,
  purchaseAirtime,
} from "@/features/telecom/api/telecom_endpoints";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AirtelLogo from "@/assets/svgs/airtel.svg";
import MtnLogo from "@/assets/svgs/mtn.svg";
import GloLogo from "@/assets/svgs/glo.svg";
import NineMobileLogo from "@/assets/svgs/9mobile.svg";
import { App_Select } from "@/components/ui_components/app_select";
import { IoChevronBack } from "react-icons/io5";

const NETWORKS = ["MTN", "Airtel", "9Mobile", "Glo"] as const;

export default function BuyAirtimePage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated, authenticatedRequest } =
    Use_Auth_Context();

  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [network, setNetwork] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [networks, setNetworks] = useState<
    Array<{ name?: string; code?: string }>
  >([]);

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

  const getLogo = (id: string) => {
    const key = id.toLowerCase();
    if (key.includes("mtn")) return { src: MtnLogo, alt: "MTN" };
    if (key.includes("airtel")) return { src: AirtelLogo, alt: "Airtel" };
    if (key.includes("glo")) return { src: GloLogo, alt: "Glo" };
    if (key.includes("9mobile") || key.includes("etisalat"))
      return { src: NineMobileLogo, alt: "9Mobile" };
    return null;
  };

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
      const msg =
        e instanceof Error ? e.message : "Unable to complete purchase";
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
    <main className="min-h-screen bg-background px-2 py-6 lg:px-10">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surface p-2 text-secondary transition hover:bg-primarySoft"
            aria-label="Go back"
          >
            <IoChevronBack size={18} />
          </button>
          <App_Text variant="title">Buy Airtime</App_Text>
        </div>
        <section className="mt-6 rounded-3xl border border-border bg-surface p-6 shadow-panel/10">
          <div className="grid gap-5">
            <div>
              <App_Text variant="caption">Select Network</App_Text>
              <div className="mt-3">
                <App_Select
                  id="network"
                  label="Network"
                  value={network}
                  onChange={(v) => setNetwork(v)}
                  options={networks.map((n) => ({
                    label: n.name ?? n.code ?? "",
                    value: n.code!,
                  }))}
                  placeholder="Choose network"
                  getIcon={(v) => {
                    const l = getLogo(v);
                    return l ? (
                      <Image
                        src={l.src as unknown as string}
                        alt={l.alt}
                        width={20}
                        height={20}
                      />
                    ) : null;
                  }}
                />
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

            {error ? <p className="text-sm text-error">{error}</p> : null}

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
