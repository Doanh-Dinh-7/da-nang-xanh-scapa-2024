import { createSlice } from "@reduxjs/toolkit";
import { SERVICE_NAME } from "../constants";
import { removeUserCase, setUserCase } from "./global-states.reducers";
import { GlobalStatesState } from "./type";

const initialState: GlobalStatesState = { user: undefined };

// Create redux slice
export const globalStatesSlice = createSlice({
    name: SERVICE_NAME,
    initialState,
    reducers: {
        setUser: setUserCase,
        removeUser: removeUserCase,
    },
});

// Export actions
export const { setUser, removeUser } = globalStatesSlice.actions;

// Export reducer
export const globalStatesReducer = globalStatesSlice.reducer;
