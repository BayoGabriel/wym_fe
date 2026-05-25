import { Auth_Shell } from "@/features/auth/components/auth_shell";
import { Login_Form } from "@/features/auth/components/login_form";

export default function LoginPage() {
  return (
    <Auth_Shell
      subtitle="Sign in to access your account, wallets, and transaction tools."
      title="Welcome back"
    >
      <Login_Form />
    </Auth_Shell>
  );
}
