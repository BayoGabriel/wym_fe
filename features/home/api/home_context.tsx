import { children_type } from "@/types/general_types/general_types";
import { createContext, useContext } from "react";

const Home_Context_Ref_State_Context = createContext<any>(null);

export const Home_Context_Ref_State_Provider = ({
  children,
}: children_type) => {
  return (
    <Home_Context_Ref_State_Context.Provider value={{}}>
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
