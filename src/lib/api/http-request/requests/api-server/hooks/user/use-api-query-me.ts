import { baseQueryObserverOptions } from "@api/http-request/base";
import { QueryObserverOptions, useQuery } from "@tanstack/react-query";
import { API_NAME } from "../../constants";
import { IResponseError } from "../../endpoints/interfaces/response.interface";
import { ApiMeResponse, getMe } from "../../endpoints/user/api-me";
import { AxiosError } from "axios";

export const useApiQueryMe = (options?: Omit<QueryObserverOptions<ApiMeResponse, AxiosError<IResponseError>>, "queryKey" | "queryFn">) => {
    return useQuery<ApiMeResponse, AxiosError<IResponseError>>({
        queryKey: [API_NAME, "me"],
        queryFn: async () => getMe(),
        ...baseQueryObserverOptions,
        ...options,
    });
};
