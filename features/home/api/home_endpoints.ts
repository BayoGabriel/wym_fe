import { HomeOverview } from "@/features/home/api/home_model";
import { AuthUser } from "@/types/auth_types";

export const getHomeOverview = async (
  request: <T>(path: string, init?: RequestInit) => Promise<T>,
): Promise<HomeOverview> => {
  const response = await request<{ user: AuthUser }>("/user/me");
  const firstName = response.user.firstName ?? response.user.email ?? "there";
  return {
    title: `Welcome back, ${firstName}`,
    subtitle: "Your authenticated fintech workspace is ready.",
  };
};
