"use client";

import { useEffect, useMemo, useState } from "react";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { useRouter } from "next/navigation";
import { App_Text } from "@/components/ui_components/app_text";
import { App_Input } from "@/components/ui_components/app_input";
import { App_Select } from "@/components/ui_components/app_select";
import { App_Button } from "@/components/ui_components/app_button";
import {
  getElectricityPlans,
  subscribeElectricity,
  verifyElectricity,
} from "@/features/bills/api/bills_endpoints";
import { IoChevronBack } from "react-icons/io5";

export default function ElectricityBillsPage() {
  const router = useRouter();
  const { isHydrated, isAuthenticated } = Use_Auth_Context();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [plans, setPlans] = useState<Array<{
    plan_code: string;
    plan_name: string;
    min_amount: number;
    max_amount: number;
  }>>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const [meter, setMeter] = useState("");
  const [type, setType] = useState<"prepaid" | "postpaid">("prepaid");
  const [phone, setPhone] = useState("");
  const [customerName, setCustomerName] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) router.replace("/auth/login");
  }, [isHydrated, isAuthenticated, router]);

  useEffect(() => {
    if (!isHydrated || !isAuthenticated) return;
    const bootstrap = async () => {
      try {
        const resp = await getElectricityPlans();
        const list = (resp.plans ?? []).map((p) => ({
          plan_code: p.plan_code,
          plan_name: p.plan_name,
          min_amount: Number(p.min_amount ?? 0),
          max_amount: Number(p.max_amount ?? 0),
        }));
        setPlans(list);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unable to load plans");
      }
    };
    void bootstrap();
  }, [isAuthenticated, isHydrated]);

  useEffect(() => {
    // Reset verification on inputs change
    setCustomerName(null);
  }, [meter, selectedPlan, type]);

  const canVerify = useMemo(
    () => meter.trim().length >= 6 && selectedPlan && type,
    [meter, selectedPlan, type],
  );
  const canSubmit = useMemo(
    () => canVerify && phone.trim().length >= 6 && amount > 0,
    [canVerify, phone, amount],
  );

  const handleVerify = async () => {
    setError(null);
    setCustomerName(null);
    try {
      const resp = await verifyElectricity({ meter, plan: selectedPlan, type });
      setCustomerName(resp.customer_name ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Verification failed");
    }
  };

  const handlePurchase = async () => {
    setLoading(true);
    setError(null);
    try {
      const internalReference = `electricity-${Date.now().toString(36)}`;
      await subscribeElectricity({
        internalReference,
        meter,
        plan: selectedPlan,
        amount,
        type,
        phone,
      });
      router.push("/dashboard/transactions");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unable to process payment";
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
          <App_Text variant="title">Electricity Payment</App_Text>
        </div>

        <section className="mt-6 rounded-3xl border border-border bg-surface p-6 shadow-panel/10">
          <div className="grid gap-5">
            <div>
              <App_Text variant="caption">Provider</App_Text>
              <App_Select
                id="plan"
                label="Distribution Company"
                value={selectedPlan}
                onChange={(v) => setSelectedPlan(v)}
                options={plans.map((p) => ({ label: p.plan_name, value: p.plan_code }))}
                placeholder="Choose provider"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <App_Input
                id="meter"
                label="Meter Number"
                value={meter}
                onChange={(e) => setMeter(e.currentTarget.value)}
              />
              <App_Select
                id="type"
                label="Type"
                value={type}
                onChange={(v) => setType(v as any)}
                options={[{ label: "Prepaid", value: "prepaid" }, { label: "Postpaid", value: "postpaid" }]}
                placeholder="Meter type"
              />
            </div>

            <App_Input
              id="amount"
              label="Amount (NGN)"
              type="number"
              min={100}
              step={50}
              value={amount ? String(amount) : ""}
              onChange={(e) => setAmount(Number(e.currentTarget.value || 0))}
            />

            <App_Input id="phone" label="Phone" value={phone} onChange={(e) => setPhone(e.currentTarget.value)} />

            <div className="flex items-center gap-3">
              <App_Button onClick={handleVerify} disabled={!canVerify} variant="secondary">
                Verify Meter
              </App_Button>
              {customerName ? (
                <App_Text variant="body" className="text-success">Verified: {customerName}</App_Text>
              ) : null}
            </div>

            {error ? <p className="text-sm text-error">{error}</p> : null}

            <App_Button onClick={handlePurchase} disabled={!canSubmit} loading={loading} className="w-full">
              Pay Electricity Bill
            </App_Button>
          </div>
        </section>
      </div>
    </main>
  );
}
