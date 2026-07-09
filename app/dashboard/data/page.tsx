"use client";

import { useEffect, useMemo, useState } from "react";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { App_Text } from "@/components/ui_components/app_text";
import { App_Input } from "@/components/ui_components/app_input";
import { App_Select } from "@/components/ui_components/app_select";
import { App_Button } from "@/components/ui_components/app_button";
import {
  getDataPlans,
  getTelecomNetworks,
  purchaseData,
} from "@/features/telecom/api/telecom_endpoints";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AirtelLogo from "@/assets/svgs/airtel.svg";
import MtnLogo from "@/assets/svgs/mtn.svg";
import GloLogo from "@/assets/svgs/glo.svg";
import NineMobileLogo from "@/assets/svgs/9mobile.svg";
import { IoChevronBack } from "react-icons/io5";

const NETWORKS = ["MTN", "Airtel", "9Mobile", "Glo"] as const;

type Plan = { code: string; name: string; amount: number };

export default function BuyDataPage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated, authenticatedRequest, user } =
    Use_Auth_Context();

  const [mobileNumber, setMobileNumber] = useState("");
  const [network, setNetwork] = useState<string>("");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [loadingPlans, setLoadingPlans] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [networks, setNetworks] = useState<
    Array<{ name?: string; code?: string }>
  >([]);

  const currencyCode = (user?.currencyCode ?? "NGN").toUpperCase();
  const countryCode = (user?.countryCode ?? "NG").toUpperCase();
  const phonePlaceholder =
    countryCode === "CA" ? "e.g. 6475551234" : "e.g. 08012345678";

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) router.replace("/auth/login");
  }, [isAuthenticated, isHydrated, router]);

  useEffect(() => {
    if (!isHydrated || !isAuthenticated) return;
    const bootstrap = async () => {
      try {
        const resp = await getTelecomNetworks();
        const list = (resp?.dataNetworks ?? []).map((n: any) => {
          const name = String(
            n.name ?? n.title ?? n.label ?? n.network ?? n.code ?? n,
          );
          // Prefer operatorId/id for Reloadly (Canada), else fallback to code-like fields
          const value =
            n.operatorId ??
            n.id ??
            n.code ??
            n.slug ??
            n.value ??
            n.network_code ??
            n.identifier ??
            n.network ??
            n.name ??
            n;
          const code = String(value);
          return { name, code };
        });
        setNetworks(list);
      } catch {
        setNetworks(NETWORKS.map((n) => ({ name: n, code: n })));
      }
    };
    void bootstrap();
  }, [isAuthenticated, isHydrated]);

  const getLogo = (id: string) => {
    const key = id.toLowerCase();
    if (key.includes("mtn")) return { src: MtnLogo, alt: "MTN" };
    if (key.includes("airtel")) return { src: AirtelLogo, alt: "Airtel" };
    if (key.includes("glo")) return { src: GloLogo, alt: "Glo" };
    if (key.includes("9mobile") || key.includes("etisalat"))
      return { src: NineMobileLogo, alt: "9Mobile" };
    return null;
  };

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
        const mapped: Plan[] = raw.map((p: any) => {
          const code = String(
            p.plan_code ?? p.planCode ?? p.code ?? p.name ?? Math.random(),
          );
          const amount = Number(p.amount ?? p.price ?? 0);
          const label = String(
            p.label ??
              p.name ??
              p.description ??
              p.plan_name ??
              p.planCode ??
              p.plan_code ??
              "",
          );
          let display = label;
          const m = label.match(/^\s*([^=]+)=\s*[^()]+(\([^)]*\)).*$/);
          if (m) {
            const size = m[1].trim();
            const validity = m[2];
            display = `${size} valid for ${validity}`;
          }
          return { code, name: display, amount };
        });
        setPlans(mapped);
      } catch (e) {
        setPlans([]);
      } finally {
        setLoadingPlans(false);
      }
    };
    void loadPlans();
  }, [network]);

  const mobileDigits = useMemo(
    () => mobileNumber.replace(/\D/g, ""),
    [mobileNumber],
  );
  const canSubmit = useMemo(() => {
    return (
      mobileDigits.length >= 10 && Boolean(network) && Boolean(selectedPlan)
    );
  }, [mobileDigits.length, network, selectedPlan]);

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
        mobileNumber: mobileDigits,
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
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-10">
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
          <App_Text variant="title">Buy Data</App_Text>
        </div>
        <section className="mt-6 rounded-3xl border border-border bg-surface p-6 shadow-panel/10">
          <div className="grid gap-5">
            <div>
              <App_Text variant="caption">Select Network</App_Text>
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

            <App_Input
              id="mobileNumber"
              label="Mobile Number"
              type="tel"
              placeholder={phonePlaceholder}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.currentTarget.value)}
            />

            <div>
              <App_Text variant="caption">Select Plan</App_Text>
              <div className="mt-3">
                {loadingPlans ? (
                  <div className="h-12 animate-pulse rounded-xl border border-border bg-surface" />
                ) : plans.length === 0 ? (
                  <App_Text variant="body" className="text-muted">
                    No plans available.
                  </App_Text>
                ) : (
                  <App_Select
                    id="plan"
                    label="Plan"
                    value={selectedPlan}
                    onChange={(v) => setSelectedPlan(v)}
                    options={plans.map((p) => ({
                      label: `${p.name} • ${currencyCode === "NGN" ? "₦" : ""}${p.amount.toLocaleString("en-US")}`,
                      value: p.code,
                    }))}
                    placeholder="Choose plan"
                  />
                )}
              </div>
            </div>

            {error ? <p className="text-sm text-error">{error}</p> : null}

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
