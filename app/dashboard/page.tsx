"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { Use_Dashboard_Context } from "@/features/dashboard/api/dashboard_context";
import { DashboardHeader } from "@/features/dashboard/components/dashboard_header";
import { Dashboard_Wallet } from "@/features/dashboard/components/dashboard_wallet";
import { Dashboard_Quick_Actions } from "@/features/dashboard/components/dashboard_quick_actions";
import { Dashboard_Transactions } from "@/features/dashboard/components/dashboard_transactions";
import { Dashboard_Spending } from "@/features/dashboard/components/dashboard_spending";
import { App_Text } from "@/components/ui_components/app_text";

export default function DashboardPage() {
  const router = useRouter();
  const { authenticatedRequest, isAuthenticated, isHydrated, logout, user } =
    Use_Auth_Context();
  const { home, isLoading, error, refreshHome } = Use_Dashboard_Context();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) router.replace("/auth/login");
  }, [isAuthenticated, isHydrated, router]);

  useEffect(() => {
    if (!isAuthenticated || !authenticatedRequest) return;
    void refreshHome(authenticatedRequest);
  }, [authenticatedRequest, isAuthenticated, refreshHome]);

  if (!isHydrated) return <div className="min-h-screen bg-background" />;
  if (!isAuthenticated || !user) return null;

  // logout remains in profile page; remove from dashboard per product direction

  const handleFundWallet = () => {
    router.push("/dashboard/fund");
  };

  const handleTransfer = () => {
    router.push("/dashboard/payout/account");
  };

  const handleBuyAirtime = () => {
    router.push("/dashboard/airtime");
  };

  const handleBuyData = () => {
    router.push("/dashboard/data");
  };

  const handleBills = () => {
    router.push("/dashboard/bills");
  };

  const handleViewTransactions = () => {
    router.push("/dashboard/transactions");
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <div className="h-16 animate-pulse rounded-2xl border border-border bg-surface" />
          <div className="h-40 animate-pulse rounded-2xl border border-border bg-surface" />
          <div className="h-24 animate-pulse rounded-2xl border border-border bg-surface" />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="h-64 animate-pulse rounded-2xl border border-border bg-surface md:col-span-2" />
            <div className="h-64 animate-pulse rounded-2xl border border-border bg-surface" />
          </div>
        </div>
      </main>
    );
  }

  if (error && !home) {
    return (
      <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <section className="rounded-3xl border border-border bg-surface p-6">
            <App_Text variant="subtitle">Error loading dashboard</App_Text>
            <App_Text variant="body" className="mt-2">
              {error}
            </App_Text>
            <button
              type="button"
              onClick={() =>
                authenticatedRequest && refreshHome(authenticatedRequest)
              }
              className="mt-4 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Retry
            </button>
          </section>
        </div>
      </main>
    );
  }

  if (!home) return null;

  return (
    <main className="min-h-screen bg-background px-3 py-6 sm:px-6 lg:px-10 lg:py-8">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <DashboardHeader fullName={home.user.fullName} />

        <Dashboard_Wallet
          balance={home.wallet.balance}
          currency={home.wallet.currency}
          accountNumber={home.wallet.accountNumber}
          bankName={home.wallet.bankName}
          onFundWallet={handleFundWallet}
          onTransfer={handleTransfer}
        />

        <Dashboard_Quick_Actions />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Dashboard_Transactions
              transactions={home.recentTransactions}
              onViewAll={handleViewTransactions}
            />
          </div>
          <div>
            <Dashboard_Spending
              totalSpent={home.analytics.totalSpent}
              totalFunded={home.analytics.totalFunded}
              airtimePurchases={home.analytics.airtimePurchases}
              dataPurchases={home.analytics.dataPurchases}
              currency={home.wallet.currency}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
