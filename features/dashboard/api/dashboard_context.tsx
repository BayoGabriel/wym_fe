"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { DashboardHomeResponse } from "@/types/dashboard_types";
import { getDashboardHome } from "@/features/dashboard/api/dashboard_endpoints";
import { children_type } from "@/types/general_types/general_types";

type DashboardContextValue = {
  home: DashboardHomeResponse | null;
  isLoading: boolean;
  error: string | null;
  refreshHome: (
    request: <T>(path: string, init?: RequestInit) => Promise<T>,
  ) => Promise<void>;
  setHome: (home: DashboardHomeResponse | null) => void;
};

const Dashboard_Context = createContext<DashboardContextValue | null>(null);

export const Dashboard_Context_Provider = ({ children }: children_type) => {
  const [home, setHome] = useState<DashboardHomeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshHome = useCallback(
    async (request: <T>(path: string, init?: RequestInit) => Promise<T>) => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await getDashboardHome(request);
        setHome(result);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Something went wrong");
        setHome(null);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const value = useMemo(
    () => ({ home, isLoading, error, refreshHome, setHome }),
    [error, home, isLoading, refreshHome],
  );

  return (
    <Dashboard_Context.Provider value={value}>
      {children}
    </Dashboard_Context.Provider>
  );
};

export const Use_Dashboard_Context = () => {
  const ctx = useContext(Dashboard_Context);
  if (!ctx)
    throw new Error(
      "Use_Dashboard_Context must be used within Dashboard_Context_Provider",
    );
  return ctx;
};
