import { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const baseRequestConfig: AxiosRequestConfig = {
    headers: {
        "Content-Type": "application/json",
    },
};

// Global request interceptor
export const baseRequestInterceptor = (requestName: string, config: InternalAxiosRequestConfig) => {
    if (process.env.NODE_ENV === "development") console.log(requestName, "Request:", config.method, config.url, config.data);
    return config;
};

export const baseRequestFailInterceptor = (requestName: string, error: any) => {
    if (process.env.NODE_ENV === "development") console.log(requestName, "Request Error:", error);
    return Promise.reject(error);
};

// Global response interceptor
export const baseResponseInterceptor = (requestName: string, response: AxiosResponse) => {
    if (process.env.NODE_ENV === "development") console.log(requestName, "Response:", response.config.method, response.config.url, response.status, response.data);
    return response.data;
};

export const baseResponseFailInterceptor = (requestName: string, error: any) => {
    if (process.env.NODE_ENV === "development") console.log(requestName, "Response Error:", error);
    return Promise.reject(error);
};
