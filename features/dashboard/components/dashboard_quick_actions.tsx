import Link from "next/link";
import { App_Text } from "@/components/ui_components/app_text";
import { Icon_Phone } from "@/components/ui_components/app_icons";

export const Dashboard_Quick_Actions = () => {
  const items = [
    { href: "/dashboard/airtime", label: "Airtime" },
    { href: "/dashboard/data", label: "Data" },
    { href: "/dashboard/bills/electricity", label: "Electricity" },
    { href: "/dashboard/bills/cable", label: "Cable" },
    { href: "/dashboard/bills", label: "More" },
  ];

  return (
    <section>
      <App_Text variant="subtitle">Quick actions</App_Text>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 *:shrink-0">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-secondary transition hover:bg-primarySoft focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <Icon_Phone className="size-4" />
            <span>{it.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
