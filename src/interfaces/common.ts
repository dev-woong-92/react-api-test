interface ResponseWrapper<T> {
  status: number;
  data: T;
  message: string;
  timestamp: string;
  trace: string;
  path: string;
}

interface ErrorResponse {
  errorCode: string;
  errorMessage: string;
}

export type { ResponseWrapper, ErrorResponse };
