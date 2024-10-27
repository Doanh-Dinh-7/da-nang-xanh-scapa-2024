import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { AppNotification, NotificationState } from "./type";

export const pushSuccessNotificationCase: CaseReducer<NotificationState, PayloadAction<Pick<AppNotification, "message" | "description">>> = (state, action) => {
	const newNotification: AppNotification = {
		type: "success",
		message: action.payload.message,
		description: action.payload.description,
		timestamp: Date.now(),
	};

	state.notifications = [...state.notifications, newNotification];
};

export const pushErrorNotificationCase: CaseReducer<NotificationState, PayloadAction<Pick<AppNotification, "message" | "description">>> = (state, action) => {
	const newNotification: AppNotification = {
		type: "error",
		message: action.payload.message,
		description: action.payload.description,
		timestamp: Date.now(),
	};

	state.notifications = [...state.notifications, newNotification];
};

export const removeNotificationCase: CaseReducer<NotificationState, PayloadAction<AppNotification>> = (state, action) => {
	state.notifications = state.notifications.filter((notification) => notification.timestamp !== action.payload.timestamp);
};
