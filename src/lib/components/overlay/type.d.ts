import React from "react";

export type OverlayProps = {
	children: React.ReactNode;
	show: boolean;
	handleClose: () => void;
};
