import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { GlobalStatesState } from "./type";

export const setCartShowCase: CaseReducer<GlobalStatesState, PayloadAction<boolean>> = (state, action) => {
	state.isCartShow = action.payload;
};
