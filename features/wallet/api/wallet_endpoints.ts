import { authenticatedRequest, requestJson } from "@/features/auth/api/auth_endpoints";

export type MyWalletResponse = {
  balance: number;
  accountNumber: string;
  bankName: string;
  wallet: any;
  reservedAccount: any;
};

export const getMyWallet = async (request: typeof authenticatedRequest): Promise<MyWalletResponse> => {
  return request("/wallet/me", { method: "GET" });
};
