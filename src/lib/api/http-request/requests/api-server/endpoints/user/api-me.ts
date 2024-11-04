import { joinPaths } from "@remix-run/router";
import { request } from "../../request";
import { USER_ENDPOINT } from "./constants";
import { IUser } from "../../models/user";

export const ME_ENDPOINT = joinPaths([USER_ENDPOINT, "me"]);

export type ApiMeResponse = IUser;

export const getMe = async () => request.get<undefined, ApiMeResponse>(ME_ENDPOINT);
