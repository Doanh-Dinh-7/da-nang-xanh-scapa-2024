import { Responsive } from "@radix-ui/themes/dist/cjs/props";
import { BoxProps } from "@radix-ui/themes/dist/cjs/components/box";
import { GridProps } from "@radix-ui/themes/dist/cjs/components/grid";

export type LayoutGridProps = GridProps & {};

export type LayoutGridItemProps = BoxProps & {
    span?: Responsive<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12">;
};
