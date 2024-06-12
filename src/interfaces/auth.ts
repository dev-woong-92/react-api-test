interface LoginRequest {
  userId: string;
  password: string;
}

interface LoginResponse {
  grantType: string;
  accessToken: string;
  id: number;
  userId: string;
  username: string;
}

interface AccessTokenRefreshResponse {
  grantType: string;
  accessToken: string;
}

export type { LoginRequest, LoginResponse, AccessTokenRefreshResponse };
