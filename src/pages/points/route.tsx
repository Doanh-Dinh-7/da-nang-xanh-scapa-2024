import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { POINTS_PAGE_PATH } from "./constants";

const PointPage = lazy(() => import("./points"));

export const pointRoute: RouteObject = {
    index: true,
    path: POINTS_PAGE_PATH,
    element: <PointPage />,
};
