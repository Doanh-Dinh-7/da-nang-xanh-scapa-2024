import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export const LOGIN_PAGE = "login";
export const LOGIN_PAGE_PATH = joinPaths([ROOT, LOGIN_PAGE]);
