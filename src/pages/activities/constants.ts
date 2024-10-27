import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export enum ConversationMessageSender {
    SELF = "SELF",
    OPPONENT = "OPPONENT",
}

export const ACTIVITIES_PAGE = "activities";
export const ACTIVITIES_PAGE_PATH = joinPaths([ROOT, ACTIVITIES_PAGE]);
