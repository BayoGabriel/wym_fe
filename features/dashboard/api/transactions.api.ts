import { authenticatedRequest } from "@/features/auth/api/auth_endpoints";
import { WalletTransactionsResponse } from "@/types/dashboard_types";

export const getMyTransactions = async (
  input: { limit?: number } = {},
  request: <T>(path: string, init?: RequestInit) => Promise<T> = authenticatedRequest,
): Promise<WalletTransactionsResponse> => {
  const params = new URLSearchParams();
  if (input.limit) params.set("limit", String(input.limit));
  return request<WalletTransactionsResponse>(
    `/wallet/transactions?${params.toString()}`,
  );
};
