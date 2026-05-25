import { App_Button } from "@/components/ui_components/app_button";
import { App_Text } from "@/components/ui_components/app_text";
import { DoubleText } from "@/components/ui_components/double_text";

interface DashboardOverviewProps {
  title: string;
  subtitle: string;
  email: string | null;
  phone: string | null;
  role: string;
  onLogout: () => Promise<void>;
  isLoggingOut: boolean;
}

export const Dashboard_Overview = ({
  title,
  subtitle,
  email,
  phone,
  role,
  onLogout,
  isLoggingOut,
}: DashboardOverviewProps) => {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="rounded-[28px] border border-border bg-surface p-6 shadow-panel sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <DoubleText subtitle={subtitle} title={title} />
            <App_Button className="sm:w-auto" loading={isLoggingOut} onClick={() => void onLogout()} variant="outline">
              Logout
            </App_Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Email", email ?? "Not set"],
            ["Phone", phone ?? "Not set"],
            ["Role", role],
          ].map(([label, value]) => (
            <section key={label} className="rounded-3xl border border-border bg-surface p-5">
              <App_Text variant="caption">{label}</App_Text>
              <App_Text variant="subtitle" className="mt-3 break-words">
                {value}
              </App_Text>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};
