import { ButtonHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";

export type ButtonSize = "sm" | "md" | "lg";

export type TextVariant = "title" | "subtitle" | "body" | "caption";

export type ContactMethod = "email" | "phone";
export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export type Card = {
  src?: string;
  alt?: string;
  className?: string;
  content?: React.ReactNode;
};

export type ImageCardGridProps = {
  cards?: Card[];
  containerClassName?: string;
  showCard?: boolean;
};