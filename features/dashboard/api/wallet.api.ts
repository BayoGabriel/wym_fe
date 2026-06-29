import { authenticatedRequest } from "@/features/auth/api/auth_endpoints";
import { WalletSummary } from "@/types/dashboard_types";

export const getMyWallet = async (
  request: <T>(
    path: string,
    init?: RequestInit,
  ) => Promise<T> = authenticatedRequest,
): Promise<WalletSummary & { wallet: unknown; reservedAccount: unknown }> => {
  return request<WalletSummary & { wallet: unknown; reservedAccount: unknown }>(
    "/wallets/me",
  );
};
