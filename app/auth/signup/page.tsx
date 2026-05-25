import { Auth_Shell } from "@/features/auth/components/auth_shell";
import { Signup_Form } from "@/features/auth/components/signup_form";

export default function SignupPage() {
  return (
    <Auth_Shell
      subtitle="Create your profile and start managing payments with a secure session."
      title="Create your account"
    >
      <Signup_Form />
    </Auth_Shell>
  );
}
