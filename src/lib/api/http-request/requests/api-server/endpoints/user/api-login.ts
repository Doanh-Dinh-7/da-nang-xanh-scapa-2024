import { joinPaths } from "@remix-run/router";
import { request } from "../../request";
import { USER_ENDPOINT } from "./constants";

export const LOGIN_ENDPOINT = joinPaths([USER_ENDPOINT, "login"]);

export type ApiLoginRequest = {
    email: string;
    password: string;
};

export type ApiLoginResponse = {
    accessToken: string;
};

export const postLogin = async (data: ApiLoginRequest) => request.post<ApiLoginRequest, ApiLoginResponse>(LOGIN_ENDPOINT, data);
