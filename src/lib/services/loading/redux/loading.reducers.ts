import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "@services/loading/redux/type";

export const setLoadingCase: CaseReducer<LoadingState, PayloadAction<boolean>> = (state, action) => {
	state.isPageLoading = action.payload;
};
