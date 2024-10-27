import { createSlice } from "@reduxjs/toolkit";
import { pushErrorNotificationCase, pushSuccessNotificationCase, removeNotificationCase } from "./notification.reducers";
import { SERVICE_NAME } from "../constants";
import { NotificationState } from "./type";

const initialState: NotificationState = {
	notifications: [],
};

// Create redux slice
export const notificationSlice = createSlice({
	name: SERVICE_NAME,
	initialState,
	reducers: {
		pushErrorNotification: pushErrorNotificationCase,
		pushSuccessNotification: pushSuccessNotificationCase,
		removeNotification: removeNotificationCase,
	},
});

// Export actions
export const { pushErrorNotification, removeNotification, pushSuccessNotification } = notificationSlice.actions;

// Export reducer
export const notificationReducer = notificationSlice.reducer;
