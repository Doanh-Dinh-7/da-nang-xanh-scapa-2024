import { createSlice } from "@reduxjs/toolkit";
import { HomeState } from "./type";
import { setCurrentRecycleBinIdCase } from "./home.reducers";

const initialState: HomeState = {
    currentRecycleBinId: undefined,
};

// Create redux slice
export const homeSlice = createSlice({
    name: "HOME_STATE",
    initialState,
    reducers: {
        setCurrentRecycleBinId: setCurrentRecycleBinIdCase,
    },
});

// Export actions
export const { setCurrentRecycleBinId } = homeSlice.actions;

// Export reducer
export const homeReducer = homeSlice.reducer;
