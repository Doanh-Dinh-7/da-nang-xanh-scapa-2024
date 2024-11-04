import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "./type";

export const setCurrentRecycleBinIdCase: CaseReducer<HomeState, PayloadAction<string | undefined>> = (state, action) => {
    state.currentRecycleBinId = action.payload;
};
