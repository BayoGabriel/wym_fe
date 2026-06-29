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
      className="group flex flex-col gap-2 items-center justify-center"
    >
      <div className="flex size-12 items-center justify-center rounded-2xl text-[#111827] transition-colors duration-300">
        {icon}
      </div>
      <App_Text variant="body" className="text-gray-100">
        {title}
      </App_Text>
    </button>
  );
};
