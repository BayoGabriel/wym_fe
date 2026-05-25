import { DashboardHomeResponse } from "@/features/dashboard/api/dashboard_model";

export const getDashboardHome = async (
  request: <T>(path: string, init?: RequestInit) => Promise<T>,
): Promise<DashboardHomeResponse> => {
  return request<DashboardHomeResponse>("/dashboard/home");
};
