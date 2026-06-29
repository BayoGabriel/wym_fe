import { DashboardHomeResponse } from "@/types/dashboard_types";

export const getDashboardHome = async (
  request: <T>(path: string, init?: RequestInit) => Promise<T>,
): Promise<DashboardHomeResponse> => {
  return request<DashboardHomeResponse>("/dashboard/home");
};
