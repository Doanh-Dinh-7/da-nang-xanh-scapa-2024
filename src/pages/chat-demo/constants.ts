import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export enum ConversationMessageSender {
    SELF = "SELF",
    OPPONENT = "OPPONENT",
}

export const CHAT_DEMO_PAGE = "chat";
export const CHAT_DEMO_PAGE_PATH = joinPaths([ROOT, CHAT_DEMO_PAGE]);
