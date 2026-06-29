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

export type UpdateProfilePayload = Partial<{
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  countryCode: string;
  preferredCurrency: string | null;
}>;

export const submitAccountUpdateRequest = (
  payload: AccountUpdateRequestPayload,
) =>
  authenticatedRequest<{ request: any }>("/user/account-update-requests", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getMyAccountUpdateRequests = () =>
  authenticatedRequest<{ requests: any[] }>("/user/account-update-requests", {
    method: "GET",
  });

export const submitSupportTicket = (payload: SupportTicketPayload) =>
  authenticatedRequest<{ ticket: any }>("/user/support-tickets", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getMySupportTickets = () =>
  authenticatedRequest<{ tickets: any[] }>("/user/support-tickets", {
    method: "GET",
  });

export const updateMyProfile = (payload: UpdateProfilePayload) =>
  authenticatedRequest<{ user: any }>("/user/me", {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
