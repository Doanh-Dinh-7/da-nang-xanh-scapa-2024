import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CHAT_DEMO_PAGE_PATH } from "./constants";

const ChatDemoPage = lazy(() => import("./chat"));

export const chatDemoRoute: RouteObject = {
    index: true,
    path: CHAT_DEMO_PAGE_PATH,
    element: <ChatDemoPage />,
};
