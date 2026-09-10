import { App_Text } from "@/components/ui_components/app_text";
import { Icon_Circle } from "@/components/ui_components/app_icons";
import type { DashboardRecentTransaction } from "@/features/dashboard/api/dashboard_model";

const statusColor = (status: string) => {
  const s = status.toLowerCase();
  if (s === "success") return "text-success";
  if (s === "failed" || s === "error") return "text-error";
  if (s === "pending" || s === "processing") return "text-amber-600";
  return "text-muted";
};

export const Dashboard_Transaction_Row = ({ t }: { t: DashboardRecentTransaction }) => {
  const isCredit = t.source === "wallet" && /fund/i.test(t.transactionType);
  const amountPrefix = isCredit ? "+" : "-";
  const amountClass = isCredit ? "text-success" : "text-foreground";

  const when = new Date(t.timestamp);
  const whenLabel = when.toLocaleString();

  const title = t.source === "telecom" ? t.transactionType : t.transactionType;
  const subtitle = t.source === "telecom" ? "Telecom" : "Wallet";

  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon_Circle className="size-4" />
        </div>
        <div className="min-w-0">
          <App_Text variant="subtitle" className="truncate">
            {title}
          </App_Text>
          <App_Text variant="body" className="mt-0.5 text-secondary truncate">
            {subtitle}  
            {whenLabel}
          </App_Text>
        </div>
      </div>
      <div className="text-right">
        <App_Text variant="subtitle" className={amountClass}>
          {amountPrefix} {t.amount.toLocaleString("en-NG", { maximumFractionDigits: 2 })}
        </App_Text>
        <App_Text variant="caption" className={statusColor(t.status)}>
          {t.status}
        </App_Text>
      </div>
    </div>
  );
};
