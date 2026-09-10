import { App_Text } from "@/components/ui_components/app_text";
import { Icon_Circle } from "@/components/ui_components/app_icons";

import type { DashboardRecentTransaction } from "@/features/dashboard/api/dashboard_model";

type Dashboard_Transaction_RowProps = {
  t: DashboardRecentTransaction;
};

const getTransactionLabel = (transactionType: string) => {
  return transactionType
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const getSourceLabel = (source: string) => {
  switch (source) {
    case "telecom":
      return "Telecom";
    case "wallet":
      return "Wallet";
    default:
      return source;
  }
};

const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case "success":
      return "bg-success/10 text-success";

    case "failed":
    case "error":
      return "bg-error/10 text-error";

    case "pending":
    case "processing":
      return "bg-amber-500/10 text-amber-600";

    default:
      return "bg-muted/10 text-muted";
  }
};

const formatTransactionDate = (timestamp: string) => {
  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

export const Dashboard_Transaction_Row = ({
  t,
}: Dashboard_Transaction_RowProps) => {
  const isCredit =
    t.source === "wallet" && /fund/i.test(t.transactionType);

  const amountPrefix = isCredit ? "+" : "-";
  const amountClass = isCredit ? "text-success" : "text-foreground";

  const title = getTransactionLabel(t.transactionType);
  const source = getSourceLabel(t.source);
  const date = formatTransactionDate(t.timestamp);

  return (
    <div className="group flex items-center gap-4 px-5 py-4">
      {/* Transaction icon */}
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primarySoft text-primary transition-colors group-hover:bg-primary/15">
        <Icon_Circle className="size-[18px]" />
      </div>

      {/* Transaction details */}
      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 items-center gap-2">
          <App_Text
            variant="body"
            className="truncate font-semibold text-foreground"
          >
            {title}
          </App_Text>
        </div>

        <div className="mt-1 flex items-center gap-2 text-secondary">
          <App_Text variant="caption" className="truncate">
            {source}
          </App_Text>

          <span
            aria-hidden="true"
            className="size-1 shrink-0 rounded-full bg-border"
          />

          <App_Text variant="caption" className="shrink-0">
            {date}
          </App_Text>
        </div>
      </div>

      {/* Amount + status */}
      <div className="flex shrink-0 flex-col items-end gap-1">
        <App_Text
          variant="body"
          className={`font-semibold tabular-nums ${amountClass}`}
        >
          {amountPrefix}₦
          {t.amount.toLocaleString("en-NG", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </App_Text>

        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold capitalize ${getStatusStyles(
            t.status,
          )}`}
        >
          {t.status.toLowerCase()}
        </span>
      </div>
    </div>
  );
};
