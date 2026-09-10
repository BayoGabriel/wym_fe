import { App_Text } from "@/components/ui_components/app_text";
import type { DashboardRecentTransaction } from "@/features/dashboard/api/dashboard_model";
import { Dashboard_Transaction_Row } from "./dashboard_transaction_row";

export const Dashboard_Transactions = ({
  transactions,
  onViewAll,
}: {
  transactions: DashboardRecentTransaction[];
  onViewAll: () => void;
}) => {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <App_Text variant="subtitle">Recent transactions</App_Text>
        <button
          type="button"
          onClick={onViewAll}
          className="rounded-md px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primarySoft"
        >
          View all
        </button>
      </div>
      <div className="mt-2 divide-y divide-border">
        {transactions.length === 0 ? (
          <div className="py-6 text-center">
            <App_Text variant="body" className="text-secondary">
              No transactions yet
            </App_Text>
          </div>
        ) : (
          transactions.map((t) => <Dashboard_Transaction_Row key={t.id} t={t} />)
        )}
      </div>
    </section>
  );
};
