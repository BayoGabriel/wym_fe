import { AuthMessageProps } from "../types";

export const Auth_Message = ({ message }: AuthMessageProps) => {
  return (
    <div className="rounded-xl border border-error/20 bg-error/5 px-4 py-3 text-sm text-error">
      {message}
    </div>
  );
};
