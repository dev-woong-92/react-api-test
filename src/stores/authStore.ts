import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoginResponse } from '../interfaces/auth';

type AuthStore = {
  loginResponse: LoginResponse | null;
  login: (loginResponse: LoginResponse) => void;
  logout: () => void;
};

export const authStore = create(
  persist<AuthStore>(
    (set) => ({
      loginResponse: null,
      login: (loginResponse) => {
        set((state) => {
          return {
            ...state,
            loginResponse: loginResponse,
          };
        });
      },
      logout: () =>
        set((state) => {
          return {
            ...state,
            loginResponse: null,
          };
        }),
    }),
    { name: 'auth' },
  ),
);
