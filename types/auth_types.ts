export interface AuthUser {
  id: string;
  email: string | null;
  phone: string | null;
  role: string;
  firstName?: string;
  lastName?: string;
  countryCode?: string;
  currencyCode?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface AuthResponse {
  user: {
    id: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresInSeconds: number;
  refreshTokenExpiresInSeconds: number;
}

export interface RefreshResponse {
  accessToken: string;
  accessTokenExpiresInSeconds: number;
}

export interface AuthSessionController {
  getAccessToken: () => string | null;
  getRefreshToken: () => string | null;
  onAccessTokenRefresh: (accessToken: string) => void;
  onSessionInvalid: () => void;
}
