import { createSlice } from "@reduxjs/toolkit";
import { setLocaleCase } from "./language.reducers";
import { SERVICE_NAME } from "../constants";

const initialState: LanguageState = { locale: "en" };

// Create redux slice
export const languageSlice = createSlice({
	name: SERVICE_NAME,
	initialState,
	reducers: {
		setLanguageLoading: setLocaleCase,
	},
});

// Export actions
export const { setLanguageLoading } = languageSlice.actions;

// Export reducer
export const languageReducer = languageSlice.reducer;
