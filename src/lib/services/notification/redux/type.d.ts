export type AppNotification = {
	type: "success" | "error" | "warning" | "info";
	message: string;
	description?: string;
	timestamp: number;
};

export type NotificationState = {
	notifications: AppNotification[];
};
