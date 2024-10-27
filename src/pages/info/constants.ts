import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export enum ConversationMessageSender {
    SELF = "SELF",
    OPPONENT = "OPPONENT",
}

export const INFO_PAGE = "info";
export const INFO_PAGE_PATH = joinPaths([ROOT, INFO_PAGE]);
