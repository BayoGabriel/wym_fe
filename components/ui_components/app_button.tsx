import {
  AppButtonProps,
  ButtonSize,
  ButtonVariant,
} from "@/types/component_types/ui_types";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-[#ffffff] hover:bg-primary/90",
  secondary: "bg-secondary text-[#ffffff] hover:bg-secondary/90",
  outline:
    "border border-border bg-surface text-secondary hover:bg-primarySoft",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

export const App_Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className = "",
  children,
  ...props
}: AppButtonProps) => {
  const isDisabled = disabled || loading;
  const classes = [
    "inline-flex w-full items-center justify-center gap-2 rounded-xl font-semibold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60",
    variantStyles[variant],
    sizeStyles[size],
    !isDisabled && "hover:-translate-y-0.5",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={isDisabled} {...props}>
      {loading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      ) : null}
      <span>{children}</span>
    </button>
  );
};
