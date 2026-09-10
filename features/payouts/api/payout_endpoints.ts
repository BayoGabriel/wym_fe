import {
  authenticatedRequest,
  requestJson,
} from "@/features/auth/api/auth_endpoints";

export type CreatePayoutPayload = {
  amount: string; // decimal string, e.g. "1500" or "1500.00"
  bankCode: string;
  accountNumber: string; // 10 digits
  narration: string; // description/reference
  transactionPin: string; // 4 digits
};

export type CreatePayoutResponse = {
  reference: string;
  status: string; // backend returns initial status, e.g. "PENDING"
};

export type PayoutStatusResponse = {
  reference: string;
  status: string;
  providerReference: string | null;
};

export const createPayout = async (
  request: typeof authenticatedRequest,
  payload: CreatePayoutPayload,
): Promise<CreatePayoutResponse> => {
  return request<CreatePayoutResponse>("/payout", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const getPayoutStatusByReference = async (
  request: typeof authenticatedRequest,
  reference: string,
): Promise<PayoutStatusResponse> => {
  const url = new URL(
    "/payout/status/by-reference",
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
  );
  url.searchParams.set("reference", reference);
  // Use authenticated fetch directly to leverage retry-on-401 behavior
  return request<PayoutStatusResponse>(`${url.pathname}${url.search}`, {
    method: "GET",
  });
};

// Optional: Bank catalog and account validation (used by the multi-step web flow)
export type BankListItem = { name: string; code: string };

export const getBanks = async (
  request: typeof authenticatedRequest,
): Promise<{ banks: BankListItem[] }> => {
  return request<{ banks: BankListItem[] }>("/payouts/banks", {
    method: "GET",
  });
};

export const validateAccount = async (
  request: typeof authenticatedRequest,
  input: { bankCode: string; accountNumber: string },
): Promise<{
  accountNumber: string;
  accountName: string;
  bankCode: string;
  bankName: string | null;
}> => {
  const url = new URL(
    "/payouts/validate-account",
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
  );
  url.searchParams.set("bankCode", input.bankCode);
  url.searchParams.set("accountNumber", input.accountNumber);
  return request<{
    accountNumber: string;
    accountName: string;
    bankCode: string;
    bankName: string | null;
  }>(`${url.pathname}${url.search}`, { method: "GET" });
};

export type PayoutRow = {
  id: string;
  userId: string;
  walletId: string;
  reference: string;
  amount: string;
  currencyCode: string;
  destinationBankCode: string;
  destinationAccountNumber: string;
  destinationAccountName: string;
  status: string;
  provider: string | null;
  providerReference: string | null;
  lastError: string | null;
  createdAt: string;
  updatedAt: string;
};

export const getPayoutById = async (
  request: typeof authenticatedRequest,
  id: string,
): Promise<{ payout: PayoutRow }> => {
  return request<{ payout: PayoutRow }>(`/payout/${id}`, { method: "GET" });
};
