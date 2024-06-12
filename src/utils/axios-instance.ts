import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://de-jeonhyunjun.iptime.org:9091',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

let accessToken: string;

const handleRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

const handleErrorRequest = (error: AxiosError<AxiosRequestConfig>) => {
  console.log(error);

  return Promise.reject(error);
};

const handleResponse = async (response: AxiosResponse) => {
  return response.data;
};

const handleErrorResponse = async (error: AxiosError | Error) => {
  if (axios.isAxiosError(error)) {
    console.log(error);
    return Promise.reject(error);
  }
};

const setupInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(handleRequest, handleErrorRequest);
  axiosInstance.interceptors.response.use(handleResponse, handleErrorResponse);

  return axiosInstance;
};

setupInterceptors(axiosInstance);

export const setAccessToken = (value: string) => {
  accessToken = value;
};
