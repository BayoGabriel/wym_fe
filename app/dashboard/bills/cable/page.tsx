"use client";

import { useEffect, useMemo, useState } from "react";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { useRouter } from "next/navigation";
import { App_Text } from "@/components/ui_components/app_text";
import { App_Input } from "@/components/ui_components/app_input";
import { App_Select } from "@/components/ui_components/app_select";
import { App_Button } from "@/components/ui_components/app_button";
import {
  getCableProviders,
  getCablePlans,
  subscribeCable,
  verifyCableIUC,
} from "@/features/bills/api/bills_endpoints";
import { IoChevronBack } from "react-icons/io5";
import PinInput from "@/components/ui_components/pin_input";
import { App_Modal } from "@/components/ui_components/app_modal";

// Module-level caches so revisits don't refetch or flash empty selects
let cachedCableProviders: Array<{ identifier: string; name: string }> | null =
  null;
const cachedCablePlans = new Map<
  string,
  Array<{ plan_code: string; amount: number; label: string }>
>();

export default function CableBillsPage() {
  const router = useRouter();
  const { isHydrated, isAuthenticated } = Use_Auth_Context();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [providers, setProviders] = useState<
    Array<{ identifier: string; name: string }>
  >(cachedCableProviders ?? []);
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  const [plans, setPlans] = useState<
    Array<{ plan_code: string; amount: number; label: string }>
  >([]);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const [iuc, setIuc] = useState("");
  const [phone, setPhone] = useState("");
  const [customerName, setCustomerName] = useState<string | null>(null);
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState("");

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) router.replace("/auth/login");
  }, [isHydrated, isAuthenticated, router]);

  useEffect(() => {
    if (!isHydrated || !isAuthenticated) return;
    const bootstrap = async () => {
      try {
        const resp = await getCableProviders();
        const list = resp.providers ?? [];
        cachedCableProviders = list;
        setProviders(list);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unable to load providers");
      }
    };
    void bootstrap();
  }, [isAuthenticated, isHydrated]);

  useEffect(() => {
    if (!selectedProvider) return;
    const loadPlans = async () => {
      const cached = cachedCablePlans.get(selectedProvider);
      if (cached) {
        setPlans(cached);
        return;
      }
      setPlans([]);
      setSelectedPlan("");
      try {
        const resp = await getCablePlans(selectedProvider);
        const list = (resp.plans ?? []).map((p) => ({
          plan_code: p.plan_code,
          amount: Number(p.amount ?? 0),
          label: p.description || p.display || p.plan_code,
        }));
        cachedCablePlans.set(selectedProvider, list);
        setPlans(list);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unable to load plans");
      }
    };
    void loadPlans();
  }, [selectedProvider]);

  const canVerify = useMemo(
    () => selectedProvider && iuc.trim().length >= 6,
    [selectedProvider, iuc],
  );
  const canSubmit = useMemo(
    () =>
      selectedProvider &&
      selectedPlan &&
      iuc.trim().length >= 6 &&
      phone.trim().length >= 6,
    [selectedProvider, selectedPlan, iuc, phone],
  );

  const handleVerify = async () => {
    setError(null);
    setCustomerName(null);
    try {
      const resp = await verifyCableIUC({ identifier: selectedProvider, iuc });
      setCustomerName(resp.customer_name ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Verification failed");
    }
  };

  const handlePurchase = async () => {
    // Open PIN modal first
    setShowPin(true);
  };

  const confirmPurchase = async () => {
    setLoading(true);
    setError(null);
    try {
      const internalReference = `cable-${Date.now().toString(36)}`;
      const planInfo = plans.find((p) => p.plan_code === selectedPlan);
      await subscribeCable({
        internalReference,
        identifier: selectedProvider,
        plan: selectedPlan,
        iuc,
        phone,
        amount: planInfo?.amount,
        transactionPin: pin,
      });
      router.push("/dashboard/transactions");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unable to process payment";
      setError(msg);
    } finally {
      setLoading(false);
      setShowPin(false);
      setPin("");
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
          <App_Text variant="title">Cable TV Subscription</App_Text>
        </div>

        <section className="mt-6 rounded-3xl border border-border bg-surface p-6 shadow-panel/10">
          <div className="grid gap-5">
            <div>
              <App_Text variant="caption">Provider</App_Text>
              <App_Select
                id="provider"
                label="Provider"
                value={selectedProvider}
                onChange={(v) => setSelectedProvider(v)}
                options={providers.map((p) => ({
                  label: p.name,
                  value: p.identifier,
                }))}
                placeholder="Choose provider"
              />
            </div>

            <div>
              <App_Text variant="caption">Plan</App_Text>
              <App_Select
                id="plan"
                label="Plan"
                value={selectedPlan}
                onChange={(v) => setSelectedPlan(v)}
                options={plans.map((p) => ({
                  label: `${p.label} • ₦${p.amount.toLocaleString("en-NG")}`,
                  value: p.plan_code,
                }))}
                placeholder="Choose plan"
              />
            </div>

            <App_Input
              id="iuc"
              label="IUC Number"
              value={iuc}
              onChange={(e) => setIuc(e.currentTarget.value)}
            />
            <App_Input
              id="phone"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
            />

            <div className="flex items-center gap-3">
              <App_Button
                onClick={handleVerify}
                disabled={!canVerify}
                variant="secondary"
              >
                Verify IUC
              </App_Button>
              {customerName ? (
                <App_Text variant="body" className="text-success">
                  Verified: {customerName}
                </App_Text>
              ) : null}
            </div>

            {error ? <p className="text-sm text-error">{error}</p> : null}

            <App_Button
              onClick={handlePurchase}
              disabled={!canSubmit}
              loading={loading}
              className="w-full"
            >
              Pay and Subscribe
            </App_Button>
          </div>
        </section>
        <App_Modal
          open={showPin}
          onClose={() => {
            if (!loading) {
              setShowPin(false);
              setPin("");
            }
          }}
          title="Enter Transaction PIN"
          footer={
            <>
              <App_Button
                variant="secondary"
                onClick={() => setShowPin(false)}
                disabled={loading}
              >
                Cancel
              </App_Button>
              <App_Button
                onClick={confirmPurchase}
                disabled={pin.length !== 4}
                loading={loading}
              >
                Confirm Payment
              </App_Button>
            </>
          }
        >
          <App_Text variant="body" className="text-secondary">
            For your security, confirm this payment with your 4-digit
            transaction PIN.
          </App_Text>
          <div className="flex justify-center py-2">
            <PinInput length={4} onChange={setPin} disabled={loading} />
          </div>
        </App_Modal>
      </div>
    </main>
  );
}
