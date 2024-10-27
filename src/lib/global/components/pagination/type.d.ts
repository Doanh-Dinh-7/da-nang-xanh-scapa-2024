import { FlexProps } from "@radix-ui/themes";

export type PaginationProps = FlexProps & {
    page?: number;
    totalPages?: number;
    onPageChange?: (newPage: number) => void;
};
