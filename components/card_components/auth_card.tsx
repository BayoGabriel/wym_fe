import { ChildrenProps } from "@/types/general_types/general_types";

export const Auth_Card = ({ children }: ChildrenProps) => {
  return (
    <section className="w-full rounded-[28px] border border-border bg-surface p-6 shadow-panel sm:p-8">
      {children}
    </section>
  );
};
