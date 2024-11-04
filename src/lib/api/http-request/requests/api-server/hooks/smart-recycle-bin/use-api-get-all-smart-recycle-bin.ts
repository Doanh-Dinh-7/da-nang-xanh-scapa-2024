import { baseUseMutationOptions } from "@api/http-request/base";
import { MutationObserverOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_NAME } from "../../constants";
import { IResponseError } from "../../endpoints/interfaces/response.interface";
import { ApiGetAllSmartRecycleBinResponse, getAllSmartRecycleBin } from "../../endpoints/smart-recycle-bin";

export const useApiGetAllSmartRecycleBin = (options?: MutationObserverOptions<ApiGetAllSmartRecycleBinResponse, AxiosError<IResponseError>>) => {
    return useMutation<ApiGetAllSmartRecycleBinResponse, AxiosError<IResponseError>>({
        mutationKey: [API_NAME, "smart-recycle-bin"],
        mutationFn: async () => getAllSmartRecycleBin(),
        ...baseUseMutationOptions,
        ...options,
    });
};
