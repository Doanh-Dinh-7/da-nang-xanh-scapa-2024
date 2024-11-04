import { joinPaths } from "@remix-run/router";
import { request } from "../../request";
import { SMART_RECYCLE_BIN_ENDPOINT } from "./constants";

export const CLAIM_REWARD_ENDPOINT = joinPaths([SMART_RECYCLE_BIN_ENDPOINT, "claim-reward"]);

export type ApiClaimRewardRequest = {
    token: string;
};

export type ApiClaimRewardResponse = {
    greenPoint: number;
    message: string;
};

export const postClaimReward = async (data: ApiClaimRewardRequest) => request.post<ApiClaimRewardRequest, ApiClaimRewardResponse>(CLAIM_REWARD_ENDPOINT, data);
