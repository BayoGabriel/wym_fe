import { App_Text } from "@/components/ui_components/app_text";
import { ReactNode } from "react";

type QuickActionCardProps = {
  title: string;
  description?: string;
  icon: ReactNode;
  onClick: () => void;
};

export const QuickActionCard = ({
  title,
  description,
  icon,
  onClick,
}: QuickActionCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
    >
      <div className="flex size-12 items-center justify-center rounded-xl text-secondary bg-primary/10 ring-1 ring-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
        {icon}
      </div>
      <App_Text variant="body" className="text-secondary font-semibold">
        {title}
      </App_Text>
      {description ? (
        <App_Text variant="caption" className="text-muted">
          {description}
        </App_Text>
      ) : null}
    </button>
  );
};
