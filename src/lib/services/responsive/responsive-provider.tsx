import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch } from "@store";
import { setResponsiveBreakPoint } from "./redux";
import { ResponsiveProviderProps } from "./type";
import { LayoutBreakpoint } from "./redux/type";

export enum LayoutBreakpointSize {
    XS = 520,
    SM = 768,
    MD = 1024,
    LG = 1280,
    XL = 1640,
}

export function ResponsiveProvider({ children }: ResponsiveProviderProps) {
    const dispatch = useAppDispatch();

    const isXs = useMediaQuery({ minWidth: LayoutBreakpointSize.XS });
    const isSm = useMediaQuery({ minWidth: LayoutBreakpointSize.SM });
    const isMd = useMediaQuery({ minWidth: LayoutBreakpointSize.MD });
    const isLg = useMediaQuery({ minWidth: LayoutBreakpointSize.LG });
    const isXl = useMediaQuery({ minWidth: LayoutBreakpointSize.XL });

    useEffect(() => {
        const breakpoints: LayoutBreakpoint[] = ["initial"];

        if (isXl) breakpoints.push("xl");
        if (isLg) breakpoints.push("lg");
        if (isMd) breakpoints.push("md");
        if (isSm) breakpoints.push("sm");
        if (isXs) breakpoints.push("xs");

        dispatch(setResponsiveBreakPoint(breakpoints));
    }, [isXs, isSm, isMd, isLg, isXl, dispatch]);

    useEffect(() => {
        const breakpoints: LayoutBreakpoint[] = ["initial"];

        const initialScreenWidth = window.innerWidth;
        if (initialScreenWidth >= LayoutBreakpointSize.XL) breakpoints.push("xl");
        if (initialScreenWidth >= LayoutBreakpointSize.LG) breakpoints.push("lg");
        if (initialScreenWidth >= LayoutBreakpointSize.MD) breakpoints.push("md");
        if (initialScreenWidth >= LayoutBreakpointSize.SM) breakpoints.push("sm");
        if (initialScreenWidth >= LayoutBreakpointSize.XS) breakpoints.push("xs");

        dispatch(setResponsiveBreakPoint(breakpoints));
    }, [dispatch]);

    return children;
}
