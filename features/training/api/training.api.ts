import { requestJson } from "@/features/auth/api/auth_endpoints";

export interface TrainingRegistrationPayload {
  fullName: string;
  email: string;
  phone: string;
}

export interface TrainingRegistration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export const registerForTraining = (payload: TrainingRegistrationPayload) =>
  requestJson<{ registration: TrainingRegistration }>("/training/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
