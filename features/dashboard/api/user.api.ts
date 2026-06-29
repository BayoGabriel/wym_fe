import { authenticatedRequest } from "@/features/auth/api/auth_endpoints";
import { AuthUser } from "@/types/auth_types";

export const getUserProfile = async (
  request: <T>(path: string, init?: RequestInit) => Promise<T> = authenticatedRequest,
): Promise<AuthUser> => {
  const resp = await request<{ user: AuthUser }>("/user/me");
  return resp.user;
};
