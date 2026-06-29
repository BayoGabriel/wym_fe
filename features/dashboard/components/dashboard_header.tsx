import { App_Text } from "@/components/ui_components/app_text";
import { CgProfile } from "react-icons/cg";

type DashboardHeaderProps = {
  fullName: string;
};

export const DashboardHeader = ({ fullName }: DashboardHeaderProps) => {
  return (
    <header className="flex items-center gap-2 justify-between w-full">
      <App_Text
        variant="subtitle"
        className="text-primary font-aeonik font-bold"
      >
        Hi, {fullName}
      </App_Text>
      <CgProfile size={24} />
    </header>
  );
};
