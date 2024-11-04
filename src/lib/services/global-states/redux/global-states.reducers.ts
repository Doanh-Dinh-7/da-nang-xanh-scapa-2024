import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { GlobalStatesState } from "./type";
import { IUser } from "@api/http-request/requests/api-server/models/user";

export const setUserCase: CaseReducer<GlobalStatesState, PayloadAction<IUser>> = (state, action) => {
    state.user = action.payload;
};

export const removeUserCase: CaseReducer<GlobalStatesState, PayloadAction<undefined>> = (state, action) => {
    state.user = undefined;
};
