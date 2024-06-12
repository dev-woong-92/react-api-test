import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { setAccessToken } from '../utils/axios-instance';
import { postAuthLoginApi, postAuthRefreshApi } from '../services/auth';
import { ErrorResponse, ResponseWrapper } from '../interfaces/common';
import { AccessTokenRefreshResponse, LoginRequest, LoginResponse } from '../interfaces/auth';
import { authStore } from '../stores/authStore';

export const useAuthLogin = () => {
  const { login } = authStore();

  return useMutation<ResponseWrapper<LoginResponse>, AxiosError<ResponseWrapper<ErrorResponse>>, LoginRequest>({
    mutationFn: postAuthLoginApi,
    onSuccess(response) {
      setAccessToken(response.data.accessToken);
      login(response.data);
    },
  });
};

export const useAuthRefresh = () => {
  const { loginResponse } = authStore();

  const authorization = `${loginResponse?.grantType} ${loginResponse?.accessToken}`;
  console.log(authorization);

  return useMutation<ResponseWrapper<AccessTokenRefreshResponse>, AxiosError<ResponseWrapper<ErrorResponse>>>({
    mutationFn: () => postAuthRefreshApi(authorization),
    onSuccess(response) {
      console.log(response);
      setAccessToken(response.data.accessToken);
    },
  });
};
