import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export enum ConversationMessageSender {
    SELF = "SELF",
    OPPONENT = "OPPONENT",
}

export const POINTS_PAGE = "points";
export const POINTS_PAGE_PATH = joinPaths([ROOT, POINTS_PAGE]);
