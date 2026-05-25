"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { App_Button } from "@/components/ui_components/app_button";
import { App_Input } from "@/components/ui_components/app_input";
import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { SignupFormValues } from "@/features/auth/api/auth_model";
import { Auth_Footer_Link } from "@/features/auth/components/auth_footer_link";
import { Auth_Message } from "@/features/auth/components/auth_message";
import { Auth_Name_Fields } from "@/features/auth/components/auth_name_fields";
import {
  buildSignupPayload,
  getIdentifierLabel,
  validateSignupForm,
} from "@/features/auth/utils/auth_form_utils";
import { Contact_Method_Toggle } from "@/features/auth/components/contact_method_toggle";

const initialValues: SignupFormValues = {
  firstName: "",
  lastName: "",
  contactMethod: "email",
  identifier: "",
  password: "",
  confirmPassword: "",
  countryCode: "NG",
};

export const Signup_Form = () => {
  const router = useRouter();
  const { isLoading, signup } = Use_Auth_Context();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof SignupFormValues | "terms", string>>
  >({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateSignupForm(values);
    if (!termsAccepted)
      nextErrors.terms = "You must accept the terms to continue.";
    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length) return;
    const result = await signup(buildSignupPayload(values));
    if (!result.success)
      return setSubmitError(result.error ?? "Unable to create account.");
    router.replace("/dashboard");
  };

  return (
    <form className="space-y-5" onSubmit={submit}>
      <Auth_Name_Fields
        firstName={values.firstName}
        firstNameError={errors.firstName}
        lastName={values.lastName}
        lastNameError={errors.lastName}
        onFirstNameChange={(firstName) =>
          setValues((current) => ({ ...current, firstName }))
        }
        onLastNameChange={(lastName) =>
          setValues((current) => ({ ...current, lastName }))
        }
      />
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
        error={errors.identifier}
        id="signup-identifier"
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
        error={errors.countryCode}
        id="countryCode"
        label="Country code"
        maxLength={3}
        onChange={(event) =>
          setValues((current) => ({
            ...current,
            countryCode: event.target.value,
          }))
        }
        placeholder="NG"
        value={values.countryCode}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <App_Input
          error={errors.password}
          id="signup-password"
          label="Password"
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              password: event.target.value,
            }))
          }
          placeholder="Minimum 8 characters"
          type="password"
          value={values.password}
        />
        <App_Input
          error={errors.confirmPassword}
          id="confirmPassword"
          label="Confirm password"
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              confirmPassword: event.target.value,
            }))
          }
          placeholder="Repeat password"
          type="password"
          value={values.confirmPassword}
        />
      </div>
      <label className="flex items-start gap-3 rounded-xl bg-background px-4 py-3 text-sm text-muted">
        <input
          checked={termsAccepted}
          className="mt-1 size-4 accent-primary"
          onChange={(event) => setTermsAccepted(event.target.checked)}
          type="checkbox"
        />
        <span>I agree to the platform terms and account usage policy.</span>
      </label>
      {errors.terms ? <Auth_Message message={errors.terms} /> : null}
      {submitError ? <Auth_Message message={submitError} /> : null}
      <App_Button loading={isLoading} size="lg" type="submit">
        Create account
      </App_Button>
      <Auth_Footer_Link
        href="/auth/login"
        label="Already have an account?"
        linkText="Sign in"
      />
    </form>
  );
};
