import {
  LoginFormValues,
  SignupFormValues,
  LoginPayload,
  SignupPayload,
} from "@/features/auth/api/auth_model";
import { ContactMethod } from "@/types/component_types/ui_types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nigerianPhonePattern = /^(?:\+234|0)[789][01]\d{8}$/;

const normalizePhone = (value: string) => {
  const stripped = value.trim().replace(/[^\d+]/g, "");
  if (stripped.startsWith("+234")) return stripped;
  if (stripped.startsWith("234")) return `+${stripped}`;
  if (stripped.startsWith("0")) return `+234${stripped.slice(1)}`;
  return stripped;
};

export const getIdentifierLabel = (method: ContactMethod) =>
  method === "email" ? "Email address" : "Phone number";

export const normalizeIdentifier = (method: ContactMethod, value: string) =>
  method === "email" ? value.trim().toLowerCase() : normalizePhone(value);

export const validateLoginForm = (values: LoginFormValues) => {
  const errors: Partial<Record<keyof LoginFormValues, string>> = {};
  const identifier = normalizeIdentifier(values.contactMethod, values.identifier);
  if (!identifier) errors.identifier = "This field is required.";
  if (values.contactMethod === "email" && identifier && !emailPattern.test(identifier)) {
    errors.identifier = "Enter a valid email address.";
  }
  if (values.contactMethod === "phone" && identifier && !nigerianPhonePattern.test(identifier)) {
    errors.identifier = "Use a valid Nigerian phone number.";
  }
  if (!values.password) errors.password = "Password is required.";
  return errors;
};

export const validateSignupForm = (values: SignupFormValues) => {
  const errors: Partial<Record<keyof SignupFormValues, string>> = {};
  Object.assign(errors, validateLoginForm(values));
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.countryCode.trim()) errors.countryCode = "Country code is required.";
  if (values.password.length < 8) errors.password = "Password must be at least 8 characters.";
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }
  return errors;
};

export const buildLoginPayload = (values: LoginFormValues): LoginPayload => {
  const identifier = normalizeIdentifier(values.contactMethod, values.identifier);
  return values.contactMethod === "email"
    ? { email: identifier, password: values.password }
    : { phone: identifier, password: values.password };
};

export const buildSignupPayload = (values: SignupFormValues): SignupPayload => {
  const identifier = normalizeIdentifier(values.contactMethod, values.identifier);
  const payload: SignupPayload = {
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    countryCode: values.countryCode.trim().toUpperCase(),
    password: values.password,
  };
  if (values.contactMethod === "email") payload.email = identifier;
  if (values.contactMethod === "phone") payload.phone = identifier;
  return payload;
};
