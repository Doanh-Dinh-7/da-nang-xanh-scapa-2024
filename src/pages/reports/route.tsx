import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { REPORT_PAGE_PATH } from "./constants";

const ReportPage = lazy(() => import("./reports"));

export const reportRoute: RouteObject = {
    index: true,
    path: REPORT_PAGE_PATH,
    element: <ReportPage />,
};
