import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export const LANDING_PAGE = "";
export const LANDING_PAGE_PATH = joinPaths([ROOT, LANDING_PAGE]);
