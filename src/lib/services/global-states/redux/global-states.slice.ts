import { createSlice } from "@reduxjs/toolkit";
import { SERVICE_NAME } from "../constants";
import { setCartShowCase } from "./global-states.reducers";
import { GlobalStatesState } from "./type";

const initialState: GlobalStatesState = { isCartShow: false, isOrderFormValid: false, orderFormData: {} };

// Create redux slice
export const globalStatesSlice = createSlice({
	name: SERVICE_NAME,
	initialState,
	reducers: {
		setCartShow: setCartShowCase,
	},
});

// Export actions
export const { setCartShow } = globalStatesSlice.actions;

// Export reducer
export const globalStatesReducer = globalStatesSlice.reducer;
