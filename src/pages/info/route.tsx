import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { INFO_PAGE_PATH } from "./constants";

const InfoPage = lazy(() => import("./info"));

export const infoRoute: RouteObject = {
    index: true,
    path: INFO_PAGE_PATH,
    element: <InfoPage />,
};
