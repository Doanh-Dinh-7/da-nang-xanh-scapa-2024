import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { LANDING_PAGE_PATH } from "./constants";

const LandingPage = lazy(() => import("./landing-page"));

export const landingRoute: RouteObject = {
    index: true,
    path: LANDING_PAGE_PATH,
    element: <LandingPage />,
};
