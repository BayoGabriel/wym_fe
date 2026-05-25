import { AppInputProps } from "@/types/component_types/ui_types";

export const App_Input = ({
  id,
  label,
  error,
  className = "",
  ...props
}: AppInputProps) => {
  const inputClasses = [
    "h-12 w-full rounded-xl border bg-surface px-4 text-sm text-secondary outline-none transition-shadow placeholder:text-muted/70 focus:ring-4",
    error
      ? "border-error focus:border-error focus:ring-error/10"
      : "border-border focus:border-primary focus:ring-primary/10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label
      className="flex w-full flex-col gap-2 text-sm font-medium text-secondary"
      htmlFor={id}
    >
      <span>{label}</span>
      <input className={inputClasses} id={id} {...props} />
      {error ? <span className="text-sm text-error">{error}</span> : null}
    </label>
  );
};
