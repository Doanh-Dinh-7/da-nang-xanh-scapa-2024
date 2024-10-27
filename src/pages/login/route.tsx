import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { LOGIN_PAGE_PATH } from "./constants";

const LoginPage = lazy(() => import("./login"));

export const loginRoute: RouteObject = {
    index: true,
    path: LOGIN_PAGE_PATH,
    element: <LoginPage />,
};
