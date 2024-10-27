import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export const setFontLoadingCase: CaseReducer<FontServiceState, PayloadAction<boolean>> = (state, action) => {
	state.isLoading = action.payload;
};
