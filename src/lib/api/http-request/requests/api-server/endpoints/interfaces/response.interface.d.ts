export interface IResponse<T> {
    data?: T;
    message?: string | string[];
    errorCode?: number | string;
    serverTimestamp?: number;
    eventName?: string; // for socket
}

export interface IResponseError {
    timestamp: number;
    error: string;
}

export interface IPaginationMetadata {
    page: number;
    take: number;
    totalItems: number;
    totalPages: number;
    itemCount: number;
}

export interface IResponsePagination<T> {
    items: T[];
    metadata: IPaginationMetadata;
}
