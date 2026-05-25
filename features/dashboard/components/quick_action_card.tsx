import { App_Text } from "@/components/ui_components/app_text";
import { Icon_ArrowRight } from "@/components/ui_components/app_icons";
import { ReactNode } from "react";

type QuickActionCardProps = {
  title: string;
  description: string;
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
      className="group flex w-full flex-col gap-5 rounded-3xl border border-border bg-surface p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md active:scale-[0.99]"
    >
      <div className="flex items-center justify-between">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primarySoft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <Icon_ArrowRight className="size-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-primary" />
      </div>
      <div>
        <App_Text variant="subtitle">{title}</App_Text>
        <App_Text variant="body" className="mt-1 text-muted-foreground">
          {description}
        </App_Text>
      </div>
    </button>
  );
};
