"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { Use_Dashboard_Context } from "@/features/dashboard/api/dashboard_context";
import { DashboardHeader } from "@/features/dashboard/components/dashboard_header";
import { WalletCard } from "@/features/dashboard/components/wallet_card";
import { QuickActionCard } from "@/features/dashboard/components/quick_action_card";
import { AnalyticsCard } from "@/features/dashboard/components/analytics_card";
import { TransactionList } from "@/features/dashboard/components/transaction_list";
import {
  Icon_Phone,
  Icon_ArrowUpRight,
  Icon_History,
} from "@/components/ui_components/app_icons";
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

  const handleLogout = async () => {
    await logout();
    router.replace("/auth/login");
  };

  const handleFundWallet = () => {
    router.push("/dashboard/fund");
  };

  const handleTransfer = () => {
    router.push("/dashboard/transfer");
  };

  const handleBuyAirtime = () => {
    router.push("/dashboard/airtime");
  };

  const handleBuyData = () => {
    router.push("/dashboard/data");
  };

  const handleViewTransactions = () => {
    router.push("/dashboard/transactions");
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <div className="h-32 animate-pulse rounded-3xl border border-border bg-surface" />
          <div className="h-64 animate-pulse rounded-3xl border border-border bg-surface" />
          <div className="grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-32 animate-pulse rounded-3xl border border-border bg-surface"
              />
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
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
    <main className="min-h-screen bg-background px-2 max-lg:py-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full flex-col gap-6">
        <DashboardHeader fullName={home.user.fullName} />

        <WalletCard
          balance={home.wallet.balance}
          currency={home.wallet.currency}
          accountNumber={home.wallet.accountNumber}
          bankName={home.wallet.bankName}
          onFundWallet={handleFundWallet}
          onTransfer={handleTransfer}
        />

        <section>
          {/* <App_Text variant="subtitle">Quick Actions</App_Text> */}
          <div className="mt-4 flex gap-4 items-center max-md:justify-between">
            <QuickActionCard
              title="Buy Airtime"
              description="Recharge your phone instantly"
              icon={<Icon_Phone className="size-5" />}
              onClick={handleBuyAirtime}
            />
            <QuickActionCard
              title="Buy Data"
              description="Get data bundles for any network"
              icon={<Icon_Phone className="size-5" />}
              onClick={handleBuyData}
            />
            <QuickActionCard
              title="Add fund"
              description="Add money to your wallet"
              icon={<Icon_ArrowUpRight className="size-5" />}
              onClick={handleFundWallet}
            />
            <QuickActionCard
              title="Transactions"
              description="View your transaction history"
              icon={<Icon_History className="size-5" />}
              onClick={handleViewTransactions}
            />
          </div>
        </section>

        <section>
          <App_Text variant="subtitle">Analytics</App_Text>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AnalyticsCard
              label="Total Funded"
              value={home.wallet.currency}
              trendLabel={home.analytics.totalFunded.toLocaleString("en-NG", {
                maximumFractionDigits: 2,
              })}
            />
            <AnalyticsCard
              label="Total Spent"
              value={home.wallet.currency}
              trendLabel={home.analytics.totalSpent.toLocaleString("en-NG", {
                maximumFractionDigits: 2,
              })}
            />
            <AnalyticsCard
              label="Airtime Purchases"
              value={home.analytics.airtimePurchases.toString()}
            />
            <AnalyticsCard
              label="Data Purchases"
              value={home.analytics.dataPurchases.toString()}
            />
          </div>
        </section>

        <TransactionList
          transactions={home.recentTransactions}
          onViewAll={handleViewTransactions}
        />

        <button
          type="button"
          onClick={handleLogout}
          className="self-start rounded-xl border border-border bg-surface px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-primarySoft"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
