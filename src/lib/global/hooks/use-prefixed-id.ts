import { useId } from "react";

// A wrapper function to add a custom prefix to the ID
export function usePrefixedId(prefix: string) {
    const id = useId();
    return `${prefix}-${id}`;
}
