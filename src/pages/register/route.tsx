import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { REGISTER_PAGE_PATH } from "./constants";

const RegisterPage = lazy(() => import("./register"));

export const registerRoute: RouteObject = {
    index: true,
    path: REGISTER_PAGE_PATH,
    element: <RegisterPage />,
};
