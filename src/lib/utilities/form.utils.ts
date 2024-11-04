import { FieldErrors } from "react-hook-form";

export function stringifyFormError(errors: FieldErrors): string {
    return Object.values(errors)
        .filter(Boolean)
        .map((error: any) => error.message)
        .join(", ");
}
