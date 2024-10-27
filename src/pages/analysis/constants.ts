import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export enum ConversationMessageSender {
    SELF = "SELF",
    OPPONENT = "OPPONENT",
}

export const ANALYSIS_PAGE = "analysis";
export const ANALYSIS_PAGE_PATH = joinPaths([ROOT, ANALYSIS_PAGE]);
