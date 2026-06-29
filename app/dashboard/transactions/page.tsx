"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { App_Text } from "@/components/ui_components/app_text";
import { Icon_Circle } from "@/components/ui_components/app_icons";
import { IoChevronBack } from "react-icons/io5";

type Tx = {
  id: string;
  source: "wallet" | "telecom";
  transactionType: string;
  amount: number;
  status: string;
  timestamp: string;
};

export default function TransactionsPage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated, authenticatedRequest } =
    Use_Auth_Context();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<Tx[]>([]);

  useEffect(() => {
    const bootstrap = async () => {
      if (!authenticatedRequest) return;
      setLoading(true);
      setError(null);
      try {
        const qs = new URLSearchParams({ limit: String(50) }).toString();
        const resp = await authenticatedRequest<{ transactions: Tx[] }>(
          `/wallets/transactions?${qs}`,
          { method: "GET" },
        );
        setItems(resp.transactions ?? []);
      } catch (e) {
        setError(
          e instanceof Error ? e.message : "Failed to load transactions",
        );
      } finally {
        setLoading(false);
      }
    };
    if (isHydrated && isAuthenticated) void bootstrap();
  }, [authenticatedRequest, isAuthenticated, isHydrated]);

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surface p-2 text-secondary transition hover:bg-primarySoft"
            aria-label="Go back"
          >
            <IoChevronBack size={18} />
          </button>

          <App_Text variant="title">Transactions</App_Text>
        </div>
        <section className="mt-6 rounded-3xl border border-border bg-surface p-6 shadow-panel/10">
          {loading ? (
            <div className="grid gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 animate-pulse rounded-xl border border-border bg-surface"
                />
              ))}
            </div>
          ) : error ? (
            <>
              <App_Text variant="subtitle">
                Unable to load transactions
              </App_Text>
              <App_Text variant="body" className="mt-2">
                {error}
              </App_Text>
            </>
          ) : items.length === 0 ? (
            <App_Text
              variant="body"
              className="text-muted text-center w-full bg-red-500"
            >
              No transactions yet.
            </App_Text>
          ) : (
            <div className="divide-y divide-border">
              {items.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between gap-4 py-4 hover:bg-primarySoft"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                        t.source === "telecom"
                          ? "text-primary bg-primary/10"
                          : "text-secondary bg-secondary/10"
                      }`}
                    >
                      <Icon_Circle className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <App_Text variant="subtitle" className="truncate">
                        {t.source === "telecom" ? "Telecom" : "Wallet"}:{" "}
                        {t.transactionType}
                      </App_Text>
                      <App_Text variant="body" className="mt-1">
                        {new Date(t.timestamp).toLocaleString()}
                      </App_Text>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <App_Text variant="subtitle">
                      {t.amount.toLocaleString("en-NG", {
                        maximumFractionDigits: 2,
                      })}
                    </App_Text>
                    <span
                      className={[
                        "rounded-full border px-3 py-1.5 text-xs font-semibold",
                        statusColor(t.status),
                      ].join(" ")}
                    >
                      {t.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function statusColor(status: string) {
  const s = status.toLowerCase();
  if (s === "success") return "text-success bg-success/10 border-success/20";
  if (s === "failed" || s === "error")
    return "text-error bg-error/10 border-error/20";
  if (s === "pending" || s === "processing")
    return "text-amber-600 bg-amber-500/10 border-amber-500/20";
  return "text-muted bg-muted/10 border-border";
}
