import { ContactMethod } from "@/types/component_types/ui_types";
import { ReactNode } from "react";

export interface AuthFooterLinkProps {
  label: string;
  href: string;
  linkText: string;
}
export interface AuthMessageProps {
  message: string;
}

export interface AuthNameFieldsProps {
  firstName: string;
  lastName: string;
  firstNameError?: string;
  lastNameError?: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
}
export interface AuthShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}
export interface ContactMethodToggleProps {
  value: ContactMethod;
  onChange: (value: ContactMethod) => void;
}
