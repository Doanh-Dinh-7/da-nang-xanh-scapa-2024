import { joinPaths } from "@remix-run/router";
import { request } from "../../request";
import { SMART_RECYCLE_BIN_ENDPOINT } from "./constants";
import { ISmartRecycleBin } from "../../models/smart-recycle-bin";

export const GET_SMART_RECYCLE_BIN_ENDPOINT = joinPaths([SMART_RECYCLE_BIN_ENDPOINT]);

export type ApiGetSmartRecycleBinRequest = {
    id: string;
};

export type ApiGetSmartRecycleBinResponse = ISmartRecycleBin;

export const getSmartRecycleBin = async (params: ApiGetSmartRecycleBinRequest) =>
    request.get<undefined, ApiGetSmartRecycleBinResponse>(GET_SMART_RECYCLE_BIN_ENDPOINT, {
        params,
    });
