import { joinPaths } from "@remix-run/router";
import { generatePath } from "react-router-dom";
import { ROOT_ENDPOINT } from "../../constants";
import { request } from "../../request";

export const GET_BLOG_ENDPOINT = joinPaths([ROOT_ENDPOINT, "blog"]);

export type ApiPostQuicksightQaRequest = {};

export type ApiPostQuicksightResponse = {
    EmbedUrl: string;
    RequestId: string;
    Status: number;
};

export const postQuicksightQa = async (data: ApiPostQuicksightQaRequest) =>
    request.post<ApiPostQuicksightQaRequest, ApiPostQuicksightResponse>(generatePath(joinPaths([ROOT_ENDPOINT, "quicksight_qa"]), data));
