import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export const setLocaleCase: CaseReducer<LanguageState, PayloadAction<LocaleName>> = (state, action) => {
	state.locale = action.payload;
};
