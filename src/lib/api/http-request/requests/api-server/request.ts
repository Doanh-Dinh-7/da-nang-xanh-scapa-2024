import { baseRequestInterceptor, baseRequestConfig, baseRequestFailInterceptor, baseResponseInterceptor, baseResponseFailInterceptor } from "@api/http-request/base";
import axios from "axios";
import { API_NAME, BASE_URL } from "./constants";
import Cookies from "js-cookie";

export const request = axios.create({
    ...baseRequestConfig,
    baseURL: BASE_URL,
    headers: {
        common: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
    },
});

request.interceptors.request.use(
    (config) => baseRequestInterceptor(API_NAME, config),
    (error) => baseRequestFailInterceptor(API_NAME, error)
);

request.interceptors.response.use(
    (response) => baseResponseInterceptor(API_NAME, response),
    (error) => baseResponseFailInterceptor(API_NAME, error)
);
