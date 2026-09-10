import { App_Text } from "@/components/ui_components/app_text";

export const Dashboard_Spending = ({
  totalSpent,
  totalFunded,
  airtimePurchases,
  dataPurchases,
  currency,
}: {
  totalSpent: number;
  totalFunded: number;
  airtimePurchases: number;
  dataPurchases: number;
  currency: string;
}) => {
  const amount = (n: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <App_Text variant="subtitle">Spending overview</App_Text>
      <div className="mt-1 text-sm text-secondary">This month</div>
      <div className="mt-2 text-2xl font-semibold">{amount(totalSpent)}</div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2">
          <span className="text-secondary">Airtime</span>
          <span className="font-medium">{amount(airtimePurchases)}</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2">
          <span className="text-secondary">Data</span>
          <span className="font-medium">{amount(dataPurchases)}</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2">
          <span className="text-secondary">Bills</span>
          <span className="font-medium">{amount(Math.max(totalSpent - (airtimePurchases + dataPurchases), 0))}</span>
        </div>
      </div>
      <div className="mt-3 text-xs text-secondary">Total funded: {amount(totalFunded)}</div>
    </section>
  );
};
