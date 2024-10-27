import { baseUseMutationOptions } from "@api/http-request/base";
import { MutationObserverOptions, useMutation } from "@tanstack/react-query";
import { API_NAME } from "../../constants";
import { ApiPostQuicksightQaRequest, ApiPostQuicksightResponse, postQuicksightQa } from "../../endpoints/quicksight-qa";
import { IResponseError } from "../../endpoints/interfaces/response.interface";

export const useApiPostQuicksightQa = (options?: MutationObserverOptions<ApiPostQuicksightResponse, IResponseError, ApiPostQuicksightQaRequest>) => {
    return useMutation<ApiPostQuicksightResponse, IResponseError, ApiPostQuicksightQaRequest>({
        mutationKey: [API_NAME, "get-blog-by-slug"],
        mutationFn: async (data: ApiPostQuicksightQaRequest) => postQuicksightQa(data),
        ...baseUseMutationOptions,
        ...options,
    });
};
