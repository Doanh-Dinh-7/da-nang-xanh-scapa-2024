import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { NEWS_PAGE_PATH } from "./constants";

const NewsPage = lazy(() => import("./news"));

export const newsRoute: RouteObject = {
    index: true,
    path: NEWS_PAGE_PATH,
    element: <NewsPage />,
};
