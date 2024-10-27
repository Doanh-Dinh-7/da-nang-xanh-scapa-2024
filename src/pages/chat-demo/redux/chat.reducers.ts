import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ChatState } from "./type";

export const setStateCase: CaseReducer<ChatState, PayloadAction<string>> = (state, action) => {
    state.state = action.payload;
};
