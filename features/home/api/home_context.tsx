"use client";

import { children_type } from "@/types/general_types/general_types";
import { HomeOverview } from "@/features/home/api/home_model";
import { createContext, useContext, useState } from "react";

interface HomeContextValue {
  overview: HomeOverview | null;
  setOverview: (overview: HomeOverview | null) => void;
}

const Home_Context_Ref_State_Context = createContext<HomeContextValue | null>(
  null,
);

export const Home_Context_Ref_State_Provider = ({
  children,
}: children_type) => {
  const [overview, setOverview] = useState<HomeOverview | null>(null);

  return (
    <Home_Context_Ref_State_Context.Provider value={{ overview, setOverview }}>
      {children}
    </Home_Context_Ref_State_Context.Provider>
  );
};

// Hook to access modal context
export const Use_Home_Context = () => {
  const context = useContext(Home_Context_Ref_State_Context);
  if (!context) {
    throw new Error(
      "Use_Home_Context must be used within a Home_Context_Ref_State_Provider",
    );
  }
  return context;
};
