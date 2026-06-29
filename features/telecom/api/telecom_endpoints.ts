import { requestJson } from "@/features/auth/api/auth_endpoints";

type AuthedRequest = <T>(path: string, init?: RequestInit) => Promise<T>;

export type TelecomNetworksResponse = {
  airtimeNetworks: Array<
    { name?: string; code?: string } & Record<string, any>
  >;
  dataNetworks: Array<{ name?: string; code?: string } & Record<string, any>>;
};

export const getTelecomNetworks =
  async (): Promise<TelecomNetworksResponse> => {
    return requestJson<TelecomNetworksResponse>("/telecom/networks", {
      method: "GET",
    });
  };

export type DataPlansResponse = {
  plans?: Array<{
    name?: string;
    plan_code?: string;
    planCode?: string;
    amount?: number | string;
    [k: string]: any;
  }>;
  [k: string]: any;
};

export const getDataPlans = async (
  network: string,
): Promise<DataPlansResponse> => {
  const qs = new URLSearchParams({ network });
  return requestJson<DataPlansResponse>(
    `/telecom/data/plans?${qs.toString()}`,
    {
      method: "GET",
    },
  );
};

export const purchaseAirtime = (
  request: AuthedRequest,
  payload: {
    internalReference: string;
    network: string;
    amount: number;
    mobileNumber: string;
    provider?: "peyflex";
  },
) =>
  request<{ transaction: any }>("/telecom/airtime/purchase", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const purchaseData = (
  request: AuthedRequest,
  payload: {
    internalReference: string;
    network: string;
    planCode: string;
    mobileNumber: string;
    provider?: "peyflex";
  },
) =>
  request<{ transaction: any }>("/telecom/data/purchase", {
    method: "POST",
    body: JSON.stringify(payload),
  });
