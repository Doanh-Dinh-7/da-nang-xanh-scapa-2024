import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { ANALYSIS_PAGE_PATH } from "./constants";

const AnalysisPage = lazy(() => import("./analysis-page"));

export const analysisRoute: RouteObject = {
    index: true,
    path: ANALYSIS_PAGE_PATH,
    element: <AnalysisPage />,
};
