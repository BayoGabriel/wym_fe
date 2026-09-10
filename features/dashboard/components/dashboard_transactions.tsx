import { App_Text } from "@/components/ui_components/app_text";

import type { DashboardRecentTransaction } from "@/features/dashboard/api/dashboard_model";

import { Dashboard_Transaction_Row } from "./dashboard_transaction_row";

type Dashboard_TransactionsProps = {
  transactions: DashboardRecentTransaction[];
  onViewAll: () => void;
};

export const Dashboard_Transactions = ({
  transactions,
  onViewAll,
}: Dashboard_TransactionsProps) => {
  const transactionCount = transactions.length;

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-3">
          <div>
            <App_Text variant="subtitle" className="font-semibold">
              Recent transactions
            </App_Text>

            <App_Text
              variant="caption"
              className="mt-0.5 block text-secondary"
            >
              Your latest account activity
            </App_Text>
          </div>

          {transactionCount > 0 && (
            <span className="rounded-full bg-primarySoft px-2 py-0.5 text-[11px] font-semibold text-primary">
              {transactionCount}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="group inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primarySoft focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          View all

          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>
      </div>

      {transactionCount === 0 ? (
        <div className="flex min-h-40 flex-col items-center justify-center px-5 py-8 text-center">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primarySoft">
            <span className="text-sm text-primary">↗</span>
          </div>

          <App_Text variant="body" className="font-medium">
            No transactions yet
          </App_Text>

          <App_Text
            variant="caption"
            className="mt-1 max-w-xs text-secondary"
          >
            Your recent payments, transfers, and wallet activity will appear
            here.
          </App_Text>
        </div>
      ) : (
        <div className="divide-y divide-border">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="transition-colors hover:bg-background/50"
            >
              <Dashboard_Transaction_Row t={transaction} />
            </div>
          ))}
        </div>
      )}

      {transactionCount > 0 && (
        <div className="border-t border-border bg-background/40 px-5 py-3">
          <button
            type="button"
            onClick={onViewAll}
            className="w-full text-center text-xs font-medium text-secondary transition-colors hover:text-primary"
          >
            See all transactions
          </button>
        </div>
      )}
    </section>
  );
};
