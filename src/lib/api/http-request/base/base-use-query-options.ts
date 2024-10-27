import { QueryObserverOptions } from "@tanstack/react-query";

export const baseQueryObserverOptions: Omit<QueryObserverOptions<any, any>, "queryKey"> = {
    retry(failureCount, error) {
        if (failureCount < 3) return true;
        else return false;
    },
};
