import { Breakpoint } from "@radix-ui/themes/dist/cjs/props";
import { useAppSelector } from "@store";

export const useResponsive = (value: Partial<Record<Breakpoint, any>>) => {
    const breakpoints = useAppSelector((state) => state.responsive.breakpoints);

    if (value.xl !== undefined && breakpoints.includes("xl")) return value.xl;
    if (value.lg !== undefined && breakpoints.includes("lg")) return value.lg;
    if (value.md !== undefined && breakpoints.includes("md")) return value.md;
    if (value.sm !== undefined && breakpoints.includes("sm")) return value.sm;
    if (value.xs !== undefined && breakpoints.includes("xs")) return value.xs;

    return value.initial || value;
};
