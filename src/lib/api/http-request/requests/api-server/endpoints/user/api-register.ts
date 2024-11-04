import { joinPaths } from "@remix-run/router";
import { request } from "../../request";
import { USER_ENDPOINT } from "./constants";

export const REGISTER_ENDPOINT = joinPaths([USER_ENDPOINT, "register"]);

export type ApiRegisterRequest = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export type ApiRegisterResponse = {
    accessToken: string;
};

export const postRegister = async (data: ApiRegisterRequest) => request.post<ApiRegisterRequest, ApiRegisterResponse>(REGISTER_ENDPOINT, data);
