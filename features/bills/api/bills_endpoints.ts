import { authenticatedRequest } from "@/features/auth/api/auth_endpoints";

export type CableProvidersResponse = {
  status?: string;
  providers?: Array<{ identifier: string; name: string }>;
  [k: string]: any;
};

export type CablePlansResponse = {
  status?: string;
  identifier?: string;
  provider?: string;
  plans?: Array<{
    plan_code: string;
    amount: string | number;
    display?: string;
    description?: string;
  }>;
  [k: string]: any;
};

export type CableVerifyResponse = {
  status?: string;
  customer_name?: string;
  iuc?: string;
  provider?: string;
  [k: string]: any;
};

export type ElectricityPlansResponse = {
  status?: string;
  identifier?: string;
  provider?: string;
  plans?: Array<{
    plan_id: string;
    plan_code: string;
    plan_name: string;
    min_amount: number;
    max_amount: number;
  }>;
  [k: string]: any;
};

export type ElectricityVerifyResponse = {
  status?: string;
  customer_name?: string;
  message?: string;
  [k: string]: any;
};

export const getCableProviders = async (): Promise<CableProvidersResponse> =>
  authenticatedRequest<CableProvidersResponse>("/bills/cable/providers");

export const getCablePlans = async (
  identifier: string,
): Promise<CablePlansResponse> =>
  authenticatedRequest<CablePlansResponse>(
    `/bills/cable/plans?identifier=${encodeURIComponent(identifier)}`,
  );

export const verifyCableIUC = async (payload: {
  identifier: string;
  iuc: string;
}): Promise<CableVerifyResponse> =>
  authenticatedRequest<CableVerifyResponse>("/bills/cable/verify", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const subscribeCable = async (payload: {
  internalReference: string;
  identifier: string;
  plan: string;
  iuc: string;
  phone: string;
  amount?: number;
}): Promise<{ transaction: any }> =>
  authenticatedRequest<{ transaction: any }>("/bills/cable/subscribe", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getElectricityPlans = async (): Promise<ElectricityPlansResponse> =>
  authenticatedRequest<ElectricityPlansResponse>("/bills/electricity/plans");

export const verifyElectricity = async (payload: {
  meter: string;
  plan: string;
  type: string;
}): Promise<ElectricityVerifyResponse> => {
  const qs = new URLSearchParams(payload as any);
  return authenticatedRequest<ElectricityVerifyResponse>(
    `/bills/electricity/verify?${qs.toString()}`,
  );
};

export const subscribeElectricity = async (payload: {
  internalReference: string;
  meter: string;
  plan: string;
  amount: number;
  type: string;
  phone: string;
}): Promise<{ transaction: any }> =>
  authenticatedRequest<{ transaction: any }>("/bills/electricity/subscribe", {
    method: "POST",
    body: JSON.stringify(payload),
  });
