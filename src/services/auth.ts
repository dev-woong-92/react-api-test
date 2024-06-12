import {
  AccessTokenRefreshResponse,
  LoginRequest,
  LoginResponse,
} from "../interfaces/auth";
import { ResponseWrapper } from "../interfaces/common";
import { axiosInstance } from "../utils/axios-instance";

const AUTH_BASE_URL = "/api/v1/auth";

export const postAuthLoginApi = (
  loginRequest: LoginRequest
): Promise<ResponseWrapper<LoginResponse>> =>
  axiosInstance.post(`${AUTH_BASE_URL}/login`, loginRequest);

export const postAuthRefreshApi = (
  authorization: string
): Promise<ResponseWrapper<AccessTokenRefreshResponse>> => {
  return axiosInstance.post(`${AUTH_BASE_URL}/refresh`, undefined, {
    headers: {
      Authorization: authorization,
    },
  });
};
