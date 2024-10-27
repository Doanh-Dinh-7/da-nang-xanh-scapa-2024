import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { ACTIVITIES_PAGE_PATH } from "./constants";

const ActivitiesPage = lazy(() => import("./activities"));

export const activityRoute: RouteObject = {
    index: true,
    path: ACTIVITIES_PAGE_PATH,
    element: <ActivitiesPage />,
};
