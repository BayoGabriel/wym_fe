import { App_Text } from "@/components/ui_components/app_text";

interface DoubleTextProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export const DoubleText = ({
  title,
  subtitle,
  align = "left",
}: DoubleTextProps) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={["flex flex-col gap-2", alignment].join(" ")}>
      <App_Text as="h1" variant="title">
        {title}
      </App_Text>
      <App_Text variant="body" className="max-w-md">
        {subtitle}
      </App_Text>
    </div>
  );
};
