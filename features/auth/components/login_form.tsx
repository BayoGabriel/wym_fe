"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { App_Button } from "@/components/ui_components/app_button";
import { App_Input } from "@/components/ui_components/app_input";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { LoginFormValues } from "@/features/auth/api/auth_model";
import { Auth_Footer_Link } from "@/features/auth/components/auth_footer_link";
import { Auth_Message } from "@/features/auth/components/auth_message";
import {
  buildLoginPayload,
  getIdentifierLabel,
  validateLoginForm,
} from "@/features/auth/utils/auth_form_utils";
import { Contact_Method_Toggle } from "@/features/auth/components/contact_method_toggle";

const initialValues: LoginFormValues = {
  contactMethod: "email",
  identifier: "",
  password: "",
};

export const Login_Form = () => {
  const router = useRouter();
  const { isLoading, login } = Use_Auth_Context();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginFormValues, string>>
  >({});
  const [submitError, setSubmitError] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateLoginForm(values);
    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length) return;
    const result = await login(buildLoginPayload(values));
    if (!result.success)
      return setSubmitError(result.error ?? "Unable to sign in.");
    router.replace("/dashboard");
  };

  return (
    <form className="space-y-5" onSubmit={submit}>
      <Contact_Method_Toggle
        onChange={(contactMethod) =>
          setValues((current) => ({
            ...current,
            contactMethod,
            identifier: "",
          }))
        }
        value={values.contactMethod}
      />
      <App_Input
        autoComplete={values.contactMethod === "email" ? "email" : "tel"}
        error={errors.identifier}
        id="identifier"
        inputMode={values.contactMethod === "email" ? "email" : "tel"}
        label={getIdentifierLabel(values.contactMethod)}
        onChange={(event) =>
          setValues((current) => ({
            ...current,
            identifier: event.target.value,
          }))
        }
        placeholder={
          values.contactMethod === "email"
            ? "name@example.com"
            : "+2348012345678"
        }
        value={values.identifier}
      />
      <App_Input
        autoComplete="current-password"
        error={errors.password}
        id="password"
        label="Password"
        onChange={(event) =>
          setValues((current) => ({ ...current, password: event.target.value }))
        }
        placeholder="Enter your password"
        type="password"
        value={values.password}
      />
      <div className="flex justify-end">
        <Link className="text-sm font-medium text-primary" href="/auth/signup">
          Need an account?
        </Link>
      </div>
      {submitError ? <Auth_Message message={submitError} /> : null}
      <App_Button loading={isLoading} size="lg" type="submit">
        Sign in
      </App_Button>
      <Auth_Footer_Link
        href="/auth/signup"
        label="Don’t have an account?"
        linkText="Sign up"
      />
    </form>
  );
};
