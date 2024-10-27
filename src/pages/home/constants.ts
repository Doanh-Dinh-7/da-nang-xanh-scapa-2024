import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export const HOME_PAGE = "";
export const HOME_PAGE_PATH = joinPaths([ROOT, HOME_PAGE]);
