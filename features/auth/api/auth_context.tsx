"use client";

import { ChildrenProps } from "@/types/general_types/general_types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AuthContextValue,
  LoginPayload,
  SignupPayload,
} from "@/features/auth/api/auth_model";
import { AuthTokens, AuthUser } from "@/types/auth_types";
import {
  authenticatedRequest,
  AUTH_STORAGE_KEYS,
  configureAuthSession,
  getApiErrorMessage,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessTokenRequest,
  signupUser,
} from "@/features/auth/api/auth_endpoints";

const Auth_Context = createContext<AuthContextValue | null>(null);

const readStoredTokens = (): AuthTokens => {
  if (typeof window === "undefined")
    return { accessToken: null, refreshToken: null };
  return {
    accessToken: window.localStorage.getItem(AUTH_STORAGE_KEYS.accessToken),
    refreshToken: window.localStorage.getItem(AUTH_STORAGE_KEYS.refreshToken),
  };
};

export const Auth_Context_Provider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [tokens, setTokens] = useState<AuthTokens>({
    accessToken: null,
    refreshToken: null,
  });
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const tokensRef = useRef<AuthTokens>(tokens);

  const syncTokens = useCallback((nextTokens: AuthTokens) => {
    tokensRef.current = nextTokens;
    setTokens(nextTokens);
    if (typeof window === "undefined") return;
    if (nextTokens.accessToken) {
      window.localStorage.setItem(
        AUTH_STORAGE_KEYS.accessToken,
        nextTokens.accessToken,
      );
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEYS.accessToken);
    }
    if (nextTokens.refreshToken) {
      window.localStorage.setItem(
        AUTH_STORAGE_KEYS.refreshToken,
        nextTokens.refreshToken,
      );
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEYS.refreshToken);
    }
  }, []);

  const clearSession = useCallback(() => {
    setUser(null);
    syncTokens({ accessToken: null, refreshToken: null });
  }, [syncTokens]);

  const hydrateUser = useCallback(
    async (accessToken: string, refreshToken: string) => {
      syncTokens({ accessToken, refreshToken });
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    },
    [syncTokens],
  );

  const handleAuthSuccess = useCallback(
    async (accessToken: string, refreshToken: string) => {
      await hydrateUser(accessToken, refreshToken);
      return { success: true as const };
    },
    [hydrateUser],
  );

  const login = useCallback(
    async (payload: LoginPayload) => {
      setIsLoading(true);
      try {
        const result = await loginUser(payload);
        return await handleAuthSuccess(result.accessToken, result.refreshToken);
      } catch (error) {
        clearSession();
        return { success: false, error: getApiErrorMessage(error) };
      } finally {
        setIsLoading(false);
      }
    },
    [clearSession, handleAuthSuccess],
  );

  const signup = useCallback(
    async (payload: SignupPayload) => {
      setIsLoading(true);
      try {
        const result = await signupUser(payload);
        return await handleAuthSuccess(result.accessToken, result.refreshToken);
      } catch (error) {
        clearSession();
        return { success: false, error: getApiErrorMessage(error) };
      } finally {
        setIsLoading(false);
      }
    },
    [clearSession, handleAuthSuccess],
  );

  const refreshAccessToken = useCallback(async () => {
    const refreshToken = tokensRef.current.refreshToken;
    if (!refreshToken) return null;
    try {
      const result = await refreshAccessTokenRequest({ refreshToken });
      syncTokens({ accessToken: result.accessToken, refreshToken });
      return result.accessToken;
    } catch {
      clearSession();
      return null;
    }
  }, [clearSession, syncTokens]);

  const logout = useCallback(async () => {
    const refreshToken = tokensRef.current.refreshToken;
    try {
      if (refreshToken) await logoutUser({ refreshToken });
    } finally {
      clearSession();
    }
  }, [clearSession]);

  useEffect(() => {
    configureAuthSession({
      getAccessToken: () => tokensRef.current.accessToken,
      getRefreshToken: () => tokensRef.current.refreshToken,
      onAccessTokenRefresh: (accessToken) => {
        syncTokens({
          accessToken,
          refreshToken: tokensRef.current.refreshToken,
        });
      },
      onSessionInvalid: clearSession,
    });
    return () => configureAuthSession(null);
  }, [clearSession, syncTokens]);

  useEffect(() => {
    const bootstrap = async () => {
      const storedTokens = readStoredTokens();
      if (!storedTokens.accessToken || !storedTokens.refreshToken) {
        setIsHydrated(true);
        return;
      }
      try {
        await hydrateUser(storedTokens.accessToken, storedTokens.refreshToken);
      } catch {
        clearSession();
      } finally {
        setIsHydrated(true);
      }
    };
    void bootstrap();
  }, [clearSession, hydrateUser]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      isAuthenticated: Boolean(user && tokens.accessToken),
      isHydrated,
      isLoading,
      login,
      signup,
      logout,
      refreshAccessToken,
      authenticatedRequest,
    }),
    [
      isHydrated,
      isLoading,
      login,
      logout,
      refreshAccessToken,
      signup,
      tokens.accessToken,
      tokens.refreshToken,
      user,
    ],
  );

  return (
    <Auth_Context.Provider value={value}>{children}</Auth_Context.Provider>
  );
};

export const Use_Auth_Context = () => {
  const context = useContext(Auth_Context);
  if (!context) {
    throw new Error(
      "Use_Auth_Context must be used within Auth_Context_Provider",
    );
  }
  return context;
};
