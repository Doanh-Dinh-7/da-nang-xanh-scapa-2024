import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";
import { COOKIE_KEY, SERVICE_NAME } from "../constants";
import { removeAccessTokenCase, setAccessTokenCase } from "./cookie.reducers";
import { CookieState } from "./type";

// Load initial data from local storage
const initialState: CookieState = {
    accessToken: Cookies.get(COOKIE_KEY.ACCESS_TOKEN),
};

// Create redux slice
export const cookieSlice = createSlice({
    name: SERVICE_NAME,
    initialState,
    reducers: {
        setAccessToken: setAccessTokenCase,
        removeAccessToken: removeAccessTokenCase,
    },
});

// Export actions
export const { setAccessToken, removeAccessToken } = cookieSlice.actions;

// Export reducer
export const cookieReducer = cookieSlice.reducer;
