import { baseUseMutationOptions } from "@api/http-request/base";
import { MutationObserverOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_NAME } from "../../constants";
import { IResponseError } from "../../endpoints/interfaces/response.interface";
import { ApiMeResponse, getMe } from "../../endpoints/user/api-me";

export const useApiMe = (options?: MutationObserverOptions<ApiMeResponse, AxiosError<IResponseError>>) => {
    return useMutation<ApiMeResponse, AxiosError<IResponseError>>({
        mutationKey: [API_NAME, "me"],
        mutationFn: async () => getMe(),
        ...baseUseMutationOptions,
        ...options,
    });
};
