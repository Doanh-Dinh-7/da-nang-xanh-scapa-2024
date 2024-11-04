import { baseUseMutationOptions } from "@api/http-request/base";
import { MutationObserverOptions, useMutation } from "@tanstack/react-query";
import { API_NAME } from "../../constants";
import { ApiLoginRequest, ApiLoginResponse, postLogin } from "../../endpoints/user";
import { IResponseError } from "../../endpoints/interfaces/response.interface";
import { AxiosError } from "axios";

export const useApiLogin = (options?: MutationObserverOptions<ApiLoginResponse, AxiosError<IResponseError>, ApiLoginRequest>) => {
    return useMutation<ApiLoginResponse, AxiosError<IResponseError>, ApiLoginRequest>({
        mutationKey: [API_NAME, "login"],
        mutationFn: async (data: ApiLoginRequest) => postLogin(data),
        ...baseUseMutationOptions,
        ...options,
    });
};
