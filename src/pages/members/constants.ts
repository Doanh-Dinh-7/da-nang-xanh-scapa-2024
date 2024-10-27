import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export enum ConversationMessageSender {
    SELF = "SELF",
    OPPONENT = "OPPONENT",
}

export const MEMBERS_PAGE = "members";
export const MEMBERS_PAGE_PATH = joinPaths([ROOT, MEMBERS_PAGE]);
