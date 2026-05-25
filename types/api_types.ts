export interface ApiErrorShape {
  code: string;
  message: string;
  details?: unknown;
}

export interface ApiErrorResponse {
  error: ApiErrorShape;
}

export interface RequestJsonOptions {
  requiresAuth?: boolean;
  retryOnUnauthorized?: boolean;
}
