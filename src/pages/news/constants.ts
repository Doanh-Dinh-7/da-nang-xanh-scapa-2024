import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export enum ConversationMessageSender {
    SELF = "SELF",
    OPPONENT = "OPPONENT",
}

export const NEWS_PAGE = "news";
export const NEWS_PAGE_PATH = joinPaths([ROOT, NEWS_PAGE]);
