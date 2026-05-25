import { TextVariant } from "@/types/component_types/ui_types";
import { ComponentPropsWithoutRef, ElementType } from "react";

export type AppTextProps<T extends ElementType> = {
  as?: T;
  variant?: TextVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const variantStyles: Record<TextVariant, string> = {
  title: "text-3xl font-semibold tracking-tight text-secondary sm:text-4xl",
  subtitle: "text-base font-medium text-secondary/90 sm:text-lg",
  body: "text-sm leading-6 text-muted sm:text-base",
  caption: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
};

export const App_Text = <T extends ElementType = "p">({
  as,
  variant = "body",
  className = "",
  ...props
}: AppTextProps<T>) => {
  const Component = (as ?? "p") as ElementType;
  const classes = [variantStyles[variant], className].filter(Boolean).join(" ");

  return <Component className={classes} {...props} />;
};
