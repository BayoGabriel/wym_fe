import { App_Input } from "@/components/ui_components/app_input";
import { AuthNameFieldsProps } from "../types";

export const Auth_Name_Fields = ({
  firstName,
  lastName,
  firstNameError,
  lastNameError,
  onFirstNameChange,
  onLastNameChange,
}: AuthNameFieldsProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <App_Input
        autoComplete="given-name"
        error={firstNameError}
        id="firstName"
        label="First name"
        onChange={(event) => onFirstNameChange(event.target.value)}
        placeholder="Ada"
        value={firstName}
      />
      <App_Input
        autoComplete="family-name"
        error={lastNameError}
        id="lastName"
        label="Last name"
        onChange={(event) => onLastNameChange(event.target.value)}
        placeholder="Okafor"
        value={lastName}
      />
    </div>
  );
};
