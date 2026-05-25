import { App_Text } from "@/components/ui_components/app_text";

export const Auth_Hero_Widget = () => {
  return (
    <aside className="relative hidden min-h-screen flex-col justify-between overflow-hidden rounded-[32px] bg-linear-to-br from-primary via-secondary to-secondary px-10 py-12 text-white lg:flex">
      <div className="space-y-4">
        <App_Text as="span" variant="caption" className="text-white/80">
          Wynmet
        </App_Text>
        <App_Text as="h2" variant="title" className="max-w-sm text-white">
        </App_Text>
        <App_Text variant="body" className="max-w-md text-white/80">
        </App_Text>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
        <App_Text variant="subtitle" className="text-white">
          Trusted access
        </App_Text>
        <App_Text variant="body" className="mt-2 text-white/75">
          Session security, token refresh, and account context are handled centrally for a consistent experience.
        </App_Text>
      </div>
    </aside>
  );
};
