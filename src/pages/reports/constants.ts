import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export enum ConversationMessageSender {
    SELF = "SELF",
    OPPONENT = "OPPONENT",
}

export const REPORT_PAGE = "reports";
export const REPORT_PAGE_PATH = joinPaths([ROOT, REPORT_PAGE]);
