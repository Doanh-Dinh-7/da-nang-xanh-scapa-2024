import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { CLAIM_REWARD_PAGE_PATH } from "./constants";

const ClaimRewardPage = lazy(() => import("./claim-reward"));

export const claimRewardRoute: RouteObject = {
    path: CLAIM_REWARD_PAGE_PATH,
    element: <ClaimRewardPage />,
};
