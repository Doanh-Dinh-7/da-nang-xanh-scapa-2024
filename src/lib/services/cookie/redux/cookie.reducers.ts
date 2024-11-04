import Cookies from "js-cookie";
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CookieState } from "./type";
import { COOKIE_KEY } from "../constants";
import { request } from "@api/http-request/requests/api-server";

export const setAccessTokenCase: CaseReducer<CookieState, PayloadAction<string>> = (state, action) => {
    state.accessToken = action.payload;

    // Save to Cookie
    Cookies.set(COOKIE_KEY.ACCESS_TOKEN, state.accessToken);

    // Set to request header
    request.defaults.headers.common["Authorization"] = "Bearer " + state.accessToken;
};

export const removeAccessTokenCase: CaseReducer<CookieState> = (state) => {
    state.accessToken = undefined;

    // Remove from Cookie
    Cookies.remove(COOKIE_KEY.ACCESS_TOKEN);

    // Remove from request header
    delete request.defaults.headers.common["Authorization"];
};
