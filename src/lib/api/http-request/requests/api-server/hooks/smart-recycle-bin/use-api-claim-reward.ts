import { baseUseMutationOptions } from "@api/http-request/base";
import { MutationObserverOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_NAME } from "../../constants";
import { IResponseError } from "../../endpoints/interfaces/response.interface";
import { ApiClaimRewardRequest, ApiClaimRewardResponse, postClaimReward } from "../../endpoints/smart-recycle-bin";

export const useApiClaimReward = (options?: MutationObserverOptions<ApiClaimRewardResponse, AxiosError<IResponseError>, ApiClaimRewardRequest>) => {
    return useMutation<ApiClaimRewardResponse, AxiosError<IResponseError>, ApiClaimRewardRequest>({
        mutationKey: [API_NAME, "smart-recycle-bin"],
        mutationFn: async (params: ApiClaimRewardRequest) => postClaimReward(params),
        ...baseUseMutationOptions,
        ...options,
    });
};
