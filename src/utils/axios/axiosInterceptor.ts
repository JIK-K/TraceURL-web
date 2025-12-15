import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import axiosService from "./axiosInstance";
import { getCookie, removeCookie, setCookie } from "../cookie/cookie";
import { useUserStore } from "@/common/zustand/user.zustand";

declare module "axios" {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}

//========================================================================//
// Token Refresh 관리
//========================================================================//
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

const onTokenRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

//========================================================================//
// Axios Interceptor
//========================================================================//
export const onRequest = (config: InternalAxiosRequestConfig) => {
  const token = getCookie("tra_atk");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};

export const onErrorRequest = (error: Error) => {
  return Promise.reject(error);
};

export const onResponse = (response: AxiosResponse) => response;

export const onErrorResponse = async (error: AxiosError) => {
  const { setUser } = useUserStore.getState();
  const axiosInstance = axiosService.getAxiosInstance();
  const originalRequest = error.config!;

  if (
    error.response?.status === 401 &&
    originalRequest &&
    !originalRequest._retry &&
    !originalRequest.url?.includes("/auth/refresh") &&
    !originalRequest.url?.includes("/login")
  ) {
    originalRequest._retry = true;

    const refreshToken = getCookie("tra_rtk");
    if (!refreshToken) {
      removeCookie("tra_atk");
      removeCookie("tra_rtk");
      setUser(null);
      alert("토큰이 만료되었습니다. 재로그인이 필요합니다.");
      window.location.href = "/login";
      return Promise.reject(error);
    }

    // ✅ 토큰 재발급 중이 아닌 경우
    if (!isRefreshing) {
      isRefreshing = true;

      try {
        console.log("🔁 토큰 재발급 시도 중...");

        const refreshTokenResponse = await axiosInstance.post(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/refresh`,
          {},
          { withCredentials: true } // 쿠키 전달
        );

        if (refreshTokenResponse.data.isSuccess) {
          const newAccessToken = refreshTokenResponse.data.data.accessToken;
          setCookie("tra_atk", newAccessToken); // 1시간 유효
          onTokenRefreshed(newAccessToken);

          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance.request(originalRequest);
        } else {
          throw new Error("Refresh token 재발급 실패");
        }
      } catch (e) {
        console.error("❌ 토큰 재발급 실패:", e);
        removeCookie("tra_atk");
        removeCookie("tra_rtk");
        setUser(null);
        window.location.href = "/login";
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
        console.log("🔚 토큰 재발급 종료");
      }
    }

    // ✅ 토큰 재발급 대기 중이면 구독 대기 → 완료 후 재시도
    return new Promise((resolve) => {
      subscribeTokenRefresh((newToken: string) => {
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        resolve(axiosInstance.request(originalRequest));
      });
    });
  }

  return Promise.reject(error);
};

const axiosInterceptor = {
  onRequest,
  onErrorRequest,
  onResponse,
  onErrorResponse,
};

export default axiosInterceptor;
