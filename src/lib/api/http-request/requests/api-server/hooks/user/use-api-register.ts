import { baseUseMutationOptions } from "@api/http-request/base";
import { MutationObserverOptions, useMutation } from "@tanstack/react-query";
import { API_NAME } from "../../constants";
import { ApiRegisterRequest, ApiRegisterResponse, postRegister } from "../../endpoints/user";
import { IResponseError } from "../../endpoints/interfaces/response.interface";
import { AxiosError } from "axios";

export const useApiRegister = (options?: MutationObserverOptions<ApiRegisterResponse, AxiosError<IResponseError>, ApiRegisterRequest>) => {
    return useMutation<ApiRegisterResponse, AxiosError<IResponseError>, ApiRegisterRequest>({
        mutationKey: [API_NAME, "register"],
        mutationFn: async (data: ApiRegisterRequest) => postRegister(data),
        ...baseUseMutationOptions,
        ...options,
    });
};
