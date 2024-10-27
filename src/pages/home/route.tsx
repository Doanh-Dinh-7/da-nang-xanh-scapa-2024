import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { HOME_PAGE_PATH } from "./constants";

const HomePage = lazy(() => import("./home-page"));

export const homeRoute: RouteObject = {
	index: true,
	path: HOME_PAGE_PATH,
	element: <HomePage />,
};
