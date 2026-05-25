"use client";

import { Auth_Context_Provider } from "@/features/auth/api/auth_context";
import { Dashboard_Context_Provider } from "@/features/dashboard/api/dashboard_context";
import { ChildrenProps } from "@/types/general_types/general_types";

export const App_Providers = ({ children }: ChildrenProps) => {
  return (
    <Auth_Context_Provider>
      <Dashboard_Context_Provider>{children}</Dashboard_Context_Provider>
    </Auth_Context_Provider>
  );
};
