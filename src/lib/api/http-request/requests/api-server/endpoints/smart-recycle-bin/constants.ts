import { joinPaths } from "@remix-run/router";
import { ROOT_ENDPOINT } from "../../constants";

export const SMART_RECYCLE_BIN_ENDPOINT = joinPaths([ROOT_ENDPOINT, "smart-recycle-bin"]);
