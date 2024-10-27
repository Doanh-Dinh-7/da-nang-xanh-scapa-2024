import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { LayoutBreakpoint, ResponsiveState } from "./type";

export const setResponsiveBreakPointsCase: CaseReducer<ResponsiveState, PayloadAction<LayoutBreakpoint[]>> = (state, action) => {
	state.breakpoints = action.payload;
};
