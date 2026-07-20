import { createContext, ReactNode, useContext, useState } from 'react';

// Create Context
const Home_Context_Ref_State_Context = createContext<any>(null);

export const Home_Context_Ref_State_Provider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [citiesList, setCitiesList] = useState<any>([]);
  const [isOpen,setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(pre => !pre);

  return (
    <Home_Context_Ref_State_Context.Provider
      value={{
        setCitiesList,
        citiesList,
        isOpen,
        toggleModal
      }}
    >
      {children}
    </Home_Context_Ref_State_Context.Provider>
  );
};

// Hook to access modal context
export const Use_Home_Context_Ref_State_Handler = () => {
  const context = useContext(Home_Context_Ref_State_Context);
  if (!context) {
    throw new Error(
      'use_Home_Context_Ref_State_Handler must be used within a Home_Context_Ref_State_Provider'
    );
  }
  return context;
};
