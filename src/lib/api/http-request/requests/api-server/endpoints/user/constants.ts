import { joinPaths } from "@remix-run/router";
import { ROOT_ENDPOINT } from "../../constants";

export const USER_ENDPOINT = joinPaths([ROOT_ENDPOINT, "user"]);
