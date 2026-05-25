import { ContactMethod } from "@/types/component_types/ui_types";
import { ContactMethodToggleProps } from "../types";



export const Contact_Method_Toggle = ({
  value,
  onChange,
}: ContactMethodToggleProps) => {
  return (
    <div className="grid grid-cols-2 rounded-xl bg-background p-1">
      {(["email", "phone"] as ContactMethod[]).map((method) => (
        <button
          key={method}
          className={[
            "rounded-lg px-3 py-2 text-sm font-medium capitalize transition-colors",
            value === method
              ? "bg-surface text-secondary shadow-sm"
              : "text-muted hover:text-secondary",
          ].join(" ")}
          onClick={() => onChange(method)}
          type="button"
        >
          {method}
        </button>
      ))}
    </div>
  );
};
