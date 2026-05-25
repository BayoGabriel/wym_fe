import { App_Text } from "@/components/ui_components/app_text";
import { Icon_Circle } from "@/components/ui_components/app_icons";
import { DashboardRecentTransaction } from "@/features/dashboard/api/dashboard_model";

type TransactionListProps = {
  transactions: DashboardRecentTransaction[];
  onViewAll: () => void;
};

const statusColor = (status: string) => {
  const s = status.toLowerCase();
  if (s === "success") return "text-success bg-success/10 border-success/20";
  if (s === "failed" || s === "error")
    return "text-error bg-error/10 border-error/20";
  if (s === "pending" || s === "processing")
    return "text-amber-600 bg-amber-500/10 border-amber-500/20";
  return "text-muted-foreground bg-muted/10 border-border";
};

const sourceIconColor = (source: string) => {
  return source === "telecom"
    ? "text-primary bg-primary/10"
    : "text-secondary bg-secondary/10";
};

export const TransactionList = ({
  transactions,
  onViewAll,
}: TransactionListProps) => {
  return (
    <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <App_Text variant="subtitle">Recent transactions</App_Text>
        <button
          type="button"
          onClick={onViewAll}
          className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary/10 hover:border-primary/30"
        >
          View All
        </button>
      </div>

      <div className="mt-5 divide-y divide-border">
        {transactions.length === 0 ? (
          <App_Text variant="body" className="py-8 text-muted-foreground">
            No transactions yet.
          </App_Text>
        ) : (
          transactions.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between gap-4 py-5 transition-all duration-200 hover:bg-muted/30"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full ${sourceIconColor(t.source)}`}
                >
                  <Icon_Circle className="size-5" />
                </div>
                <div className="min-w-0">
                  <App_Text variant="subtitle" className="truncate">
                    {t.source === "telecom" ? "Telecom" : "Wallet"}:{" "}
                    {t.transactionType}
                  </App_Text>
                  <App_Text
                    variant="body"
                    className="mt-1 text-muted-foreground"
                  >
                    {new Date(t.timestamp).toLocaleString()}
                  </App_Text>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <App_Text variant="subtitle" className="text-secondary">
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
          ))
        )}
      </div>
    </section>
  );
};
