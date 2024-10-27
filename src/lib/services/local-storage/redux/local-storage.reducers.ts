import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorageState } from "./type";
import { setItem } from "../helper";
import { STORAGE_KEY } from "../constants";

export const setDemoItemCase: CaseReducer<LocalStorageState, PayloadAction<string>> = (state, action) => {
	state.demoItem = action.payload;

	// Save to local storage
	setItem(STORAGE_KEY.DEMO_ITEM, state.demoItem);
};
