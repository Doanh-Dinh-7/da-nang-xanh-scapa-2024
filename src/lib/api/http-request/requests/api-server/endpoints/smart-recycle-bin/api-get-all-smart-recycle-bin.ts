import { joinPaths } from "@remix-run/router";
import { request } from "../../request";
import { SMART_RECYCLE_BIN_ENDPOINT } from "./constants";
import { ISmartRecycleBin } from "../../models/smart-recycle-bin";

export const GET_ALL_SMART_RECYCLE_BIN_ENDPOINT = joinPaths([SMART_RECYCLE_BIN_ENDPOINT, "all"]);

export type ApiGetAllSmartRecycleBinResponse = ISmartRecycleBin[];

export const getAllSmartRecycleBin = async () => request.get<undefined, ApiGetAllSmartRecycleBinResponse>(GET_ALL_SMART_RECYCLE_BIN_ENDPOINT);
