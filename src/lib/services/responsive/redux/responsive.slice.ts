import { createSlice } from "@reduxjs/toolkit";
import { SERVICE_NAME } from "../constants";
import { setResponsiveBreakPointsCase } from "./responsive.reducers";
import { ResponsiveState } from "./type";

const initialState: ResponsiveState = {
	breakpoints: ["initial"],
};

// Create redux slice
export const responsiveSlice = createSlice({
	name: SERVICE_NAME,
	initialState,
	reducers: {
		setResponsiveBreakPoint: setResponsiveBreakPointsCase,
	},
});

// Export actions
export const { setResponsiveBreakPoint } = responsiveSlice.actions;

// Export reducer
export const responsiveReducer = responsiveSlice.reducer;
