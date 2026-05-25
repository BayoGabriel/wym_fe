import Link from "next/link";
import { AuthFooterLinkProps } from "../types";

export const Auth_Footer_Link = ({
  label,
  href,
  linkText,
}: AuthFooterLinkProps) => {
  return (
    <p className="text-center text-sm text-muted">
      {label}{" "}
      <Link className="font-semibold text-primary" href={href}>
        {linkText}
      </Link>
    </p>
  );
};
