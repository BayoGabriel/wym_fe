"use client";

import { useEffect, useState } from "react";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { App_Text } from "@/components/ui_components/app_text";
import { App_Button } from "@/components/ui_components/app_button";
import { getMyWallet } from "@/features/wallet/api/wallet_endpoints";

export default function FundAccountPage() {
  const { isAuthenticated, isHydrated, authenticatedRequest } = Use_Auth_Context();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");

  useEffect(() => {
    const bootstrap = async () => {
      if (!authenticatedRequest) return;
      setLoading(true);
      setError(null);
      try {
        const resp = await getMyWallet(authenticatedRequest);
        setAccountNumber(resp.accountNumber);
        setBankName(resp.bankName);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load account details");
      } finally {
        setLoading(false);
      }
    };
    if (isHydrated && isAuthenticated) void bootstrap();
  }, [authenticatedRequest, isAuthenticated, isHydrated]);

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-2xl">
        <App_Text variant="title">Fund Account</App_Text>
        <section className="mt-6 rounded-3xl border border-border bg-surface p-6 shadow-panel/10">
          {loading ? (
            <div className="h-28 animate-pulse rounded-2xl border border-border bg-surface" />
          ) : error ? (
            <>
              <App_Text variant="subtitle">Unable to fetch reserved account</App_Text>
              <App_Text variant="body" className="mt-2">{error}</App_Text>
              <App_Button className="mt-4 w-fit" onClick={() => location.reload()}>Retry</App_Button>
            </>
          ) : (
            <div className="grid gap-5">
              <div className="rounded-2xl border border-border bg-background p-4">
                <App_Text variant="caption">Bank</App_Text>
                <App_Text variant="subtitle" className="mt-1">{bankName}</App_Text>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <App_Text variant="caption">Account Number</App_Text>
                <App_Text variant="subtitle" className="mt-1">{accountNumber}</App_Text>
              </div>
              <App_Text variant="body" className="text-muted">
                Transfer funds to your reserved account above. Your wallet will be credited automatically once payment is confirmed.
              </App_Text>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
