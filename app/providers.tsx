"use client";

import { Auth_Context_Provider } from "@/features/auth/api/auth_context";
import { Home_Context_Ref_State_Provider } from "@/features/home/api/home_context";
import { ChildrenProps } from "@/types/general_types/general_types";

export const App_Providers = ({ children }: ChildrenProps) => {
  return (
    <Auth_Context_Provider>
      <Home_Context_Ref_State_Provider>{children}</Home_Context_Ref_State_Provider>
    </Auth_Context_Provider>
  );
};
