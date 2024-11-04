import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export const CLAIM_REWARD_PAGE = "claim-reward";
export const CLAIM_REWARD_PAGE_PATH = joinPaths([ROOT, CLAIM_REWARD_PAGE]);
