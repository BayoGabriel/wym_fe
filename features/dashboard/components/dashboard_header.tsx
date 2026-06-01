import { App_Text } from "@/components/ui_components/app_text";

type DashboardHeaderProps = {
  fullName: string;
};

const getGreeting = (date: Date) => {
  const hour = date.getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

export const DashboardHeader = ({ fullName }: DashboardHeaderProps) => {
  const now = new Date();
  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-5">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-sm font-bold text-[#ffffff] shadow-md">
          {initials || "U"}
        </div>
        <div className="flex flex-col">
          <App_Text variant="subtitle">
            {getGreeting(now)}, {fullName}
          </App_Text>
          <App_Text variant="body" className="mt-1 text-muted-foreground">
            Welcome back
          </App_Text>
        </div>
      </div>
      <App_Text variant="caption" className="text-right text-muted-foreground">
        {now.toLocaleString()}
      </App_Text>
    </header>
  );
};
