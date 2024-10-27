import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { MEMBERS_PAGE_PATH } from "./constants";

const MembersPage = lazy(() => import("./members"));

export const membersRoute: RouteObject = {
    index: true,
    path: MEMBERS_PAGE_PATH,
    element: <MembersPage />,
};
