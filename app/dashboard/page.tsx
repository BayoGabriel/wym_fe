"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { Use_Home_Context } from "@/features/home/api/home_context";
import { getHomeOverview } from "@/features/home/api/home_endpoints";
import { Dashboard_Overview } from "@/features/home/components/dashboard_overview";

export default function DashboardPage() {
  const router = useRouter();
  const { authenticatedRequest, isAuthenticated, isHydrated, logout, user } =
    Use_Auth_Context();
  const { overview, setOverview } = Use_Home_Context();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (isHydrated && !isAuthenticated) router.replace("/auth/login");
  }, [isAuthenticated, isHydrated, router]);

  useEffect(() => {
    if (!isAuthenticated) return;
    void getHomeOverview(authenticatedRequest)
      .then(setOverview)
      .catch(() =>
        setOverview({
          title: "Welcome back",
          subtitle: "Your authenticated fintech workspace is ready.",
        }),
      );
  }, [authenticatedRequest, isAuthenticated, setOverview]);

  if (!isHydrated) return <div className="min-h-screen bg-background" />;
  if (!isAuthenticated || !user) return null;

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    router.replace("/auth/login");
  };

  return (
    <Dashboard_Overview
      email={user.email}
      isLoggingOut={isLoggingOut}
      onLogout={handleLogout}
      phone={user.phone}
      role={user.role}
      subtitle={
        overview?.subtitle ?? "Your authenticated fintech workspace is ready."
      }
      title={overview?.title ?? "Welcome back"}
    />
  );
}
