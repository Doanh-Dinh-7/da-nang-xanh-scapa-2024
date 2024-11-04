import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export const REGISTER_PAGE = "register";
export const REGISTER_PAGE_PATH = joinPaths([ROOT, REGISTER_PAGE]);
