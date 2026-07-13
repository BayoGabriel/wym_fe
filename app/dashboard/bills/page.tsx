"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { useEffect } from "react";
import { App_Text } from "@/components/ui_components/app_text";
import { Icon_Phone, Icon_ArrowRight } from "@/components/ui_components/app_icons";

export default function BillsHubPage() {
  const router = useRouter();
  const { isHydrated, isAuthenticated } = Use_Auth_Context();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) router.replace("/auth/login");
  }, [isAuthenticated, isHydrated, router]);

  const cards = [
    {
      title: "Airtime",
      href: "/dashboard/airtime",
      description: "Recharge instantly for any network",
      icon: <Icon_Phone className="size-6" />,
      gradient: "from-pink-500/15 to-rose-500/15",
    },
    {
      title: "Data",
      href: "/dashboard/data",
      description: "Buy bundles that fit your needs",
      icon: <Icon_Phone className="size-6" />,
      gradient: "from-blue-500/15 to-cyan-500/15",
    },
    {
      title: "Cable TV",
      href: "/dashboard/bills/cable",
      description: "Startimes, GOTV, DSTV & more",
      icon: <Icon_Phone className="size-6" />,
      gradient: "from-purple-500/15 to-fuchsia-500/15",
    },
    {
      title: "Electricity",
      href: "/dashboard/bills/electricity",
      description: "Prepaid & postpaid payments",
      icon: <Icon_Phone className="size-6" />,
      gradient: "from-amber-500/15 to-orange-500/15",
    },
  ];

  return (
    <main className="min-h-screen bg-background px-2 py-6 lg:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <App_Text variant="title">Bills</App_Text>
          <App_Text variant="body" className="mt-1 text-secondary">
            Choose a category to continue
          </App_Text>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-panel/10 transition hover:shadow-panel ${
                c.gradient ? `bg-gradient-to-br ${c.gradient}` : ""
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-white/50 blur-3xl" />
              <div className="relative z-10 flex h-36 flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-white/70 text-primary shadow-sm">
                    {c.icon}
                  </div>
                  <App_Text variant="subtitle">{c.title}</App_Text>
                </div>
                <div className="flex items-center justify-between">
                  <p className="max-w-[75%] text-sm text-secondary">{c.description}</p>
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-white transition group-hover:translate-x-1">
                    <Icon_ArrowRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
