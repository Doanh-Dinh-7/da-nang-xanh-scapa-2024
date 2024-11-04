import { baseUseMutationOptions } from "@api/http-request/base";
import { MutationObserverOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_NAME } from "../../constants";
import { IResponseError } from "../../endpoints/interfaces/response.interface";
import { ApiGetSmartRecycleBinRequest, ApiGetSmartRecycleBinResponse, getSmartRecycleBin } from "../../endpoints/smart-recycle-bin";

export const useApiGetSmartRecycleBin = (options?: MutationObserverOptions<ApiGetSmartRecycleBinResponse, AxiosError<IResponseError>, ApiGetSmartRecycleBinRequest>) => {
    return useMutation<ApiGetSmartRecycleBinResponse, AxiosError<IResponseError>, ApiGetSmartRecycleBinRequest>({
        mutationKey: [API_NAME, "smart-recycle-bin"],
        mutationFn: async (params: ApiGetSmartRecycleBinRequest) => getSmartRecycleBin(params),
        ...baseUseMutationOptions,
        ...options,
    });
};
