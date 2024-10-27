import { createSlice } from "@reduxjs/toolkit";
import { SERVICE_NAME } from "../constants";
import { setDemoItemCase } from "./local-storage.reducers";
import { LocalStorageState } from "./type";

// Load initial data from local storage
const initialState: LocalStorageState = { demoItem: "" };

// Create redux slice
export const localStorageSlice = createSlice({
	name: SERVICE_NAME,
	initialState,
	reducers: {
		setDemoItem: setDemoItemCase,
	},
});

// Export actions
export const { setDemoItem } = localStorageSlice.actions;

// Export reducer
export const localStorageReducer = localStorageSlice.reducer;
