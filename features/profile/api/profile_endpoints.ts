import { authenticatedRequest } from "@/features/auth/api/auth_endpoints";

export type AccountUpdateRequestPayload = {
  requestedFields: Partial<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    countryCode: string;
    preferredCurrency: string;
  }>;
};

export type SupportTicketPayload = {
  subject: string;
  message: string;
};

export const submitAccountUpdateRequest = (payload: AccountUpdateRequestPayload) =>
  authenticatedRequest<{ request: any }>(
    "/user/account-update-requests",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );

export const getMyAccountUpdateRequests = () =>
  authenticatedRequest<{ requests: any[] }>(
    "/user/account-update-requests",
    { method: "GET" },
  );

export const submitSupportTicket = (payload: SupportTicketPayload) =>
  authenticatedRequest<{ ticket: any }>(
    "/user/support-tickets",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );

export const getMySupportTickets = () =>
  authenticatedRequest<{ tickets: any[] }>(
    "/user/support-tickets",
    { method: "GET" },
  );
