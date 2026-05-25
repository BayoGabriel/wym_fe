import { App_Text } from "@/components/ui_components/app_text";

type AnalyticsCardProps = {
  label: string;
  value: string;
  trendLabel?: string;
  progress?: number;
};

export const AnalyticsCard = ({
  label,
  value,
  trendLabel,
  progress,
}: AnalyticsCardProps) => {
  const pct =
    progress === undefined ? null : Math.max(0, Math.min(100, progress));

  const trendVariant = trendLabel
    ? trendLabel.startsWith("+") || trendLabel.toLowerCase().includes("up")
      ? "positive"
      : trendLabel.startsWith("-") || trendLabel.toLowerCase().includes("down")
        ? "negative"
        : "neutral"
    : null;

  const trendBadgeColor =
    trendVariant === "positive"
      ? "bg-success/10 text-success"
      : trendVariant === "negative"
        ? "bg-error/10 text-error"
        : "bg-muted/10 text-muted-foreground";

  return (
    <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      <App_Text variant="caption" className="text-muted-foreground">
        {label}
      </App_Text>
      <App_Text variant="subtitle" className="mt-3">
        {value}
      </App_Text>
      {trendLabel ? (
        <span
          className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${trendBadgeColor}`}
        >
          {trendLabel}
        </span>
      ) : null}
      {pct === null ? null : (
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </section>
  );
};
