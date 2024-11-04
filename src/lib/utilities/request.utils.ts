import { IResponseError } from "@api/http-request/requests/api-server/endpoints/interfaces/response.interface";
import { AxiosError } from "axios";

// Generate random image url
export function stringifyRequestError(error: AxiosError<IResponseError>): string {
    if (error.response) {
        // The request was made and the server responded with a status code
        return `${error.response.status} - ${error.response.data?.error || error.response.statusText}`;
    } else if (error.request) {
        // The request was made but no response was received
        return "Không thể kết nối đến máy chủ";
    } else {
        // Something happened in setting up the request that triggered an Error
        return `Lỗi: ${error.message}`;
    }
}
