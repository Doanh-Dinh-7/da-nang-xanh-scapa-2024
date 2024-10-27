import { createSlice } from "@reduxjs/toolkit";
import { setFontLoadingCase } from "./font.reducers";
import { SERVICE_NAME } from "../constants";

const initialState: FontServiceState = { isLoading: true };

// Create redux slice
export const fontSlice = createSlice({
	name: SERVICE_NAME,
	initialState,
	reducers: {
		setFontLoading: setFontLoadingCase,
	},
});

// Export actions
export const { setFontLoading } = fontSlice.actions;

// Export reducer
export const fontReducer = fontSlice.reducer;
