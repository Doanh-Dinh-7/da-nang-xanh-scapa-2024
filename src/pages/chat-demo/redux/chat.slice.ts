import { createSlice } from "@reduxjs/toolkit";
import { ChatState } from "./type";
import { setStateCase } from "./chat.reducers";

const initialState: ChatState = {
    state: "",
};

// Create redux slice
export const chatSlice = createSlice({
    name: "CHAT_STATE",
    initialState,
    reducers: {
        setState: setStateCase,
    },
});

// Export actions
export const { setState } = chatSlice.actions;

// Export reducer
export const chatReducer = chatSlice.reducer;
