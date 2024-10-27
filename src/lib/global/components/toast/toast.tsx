import * as BaseToast from "@radix-ui/react-toast";
import { Button, Flex, Text } from "@radix-ui/themes";
import { removeNotification } from "@services/notification";
import { useAppDispatch, useAppSelector } from "@store";
import { motion } from "framer-motion";
import { shallowEqual } from "react-redux";
import { ToastProps } from "./type";

import styles from "./style.module.scss";
import { AppNotification } from "@services/notification/redux/type";

const colorTheme: Record<AppNotification["type"], string> = {
	success: "green",
	error: "red",
	warning: "yellow",
	info: "blue",
};

export const Toast = ({}: ToastProps) => {
	const dispatch = useAppDispatch();
	const { notifications } = useAppSelector((state) => state.notification, shallowEqual);

	return (
		<BaseToast.Provider swipeDirection="right">
			{notifications.map((notification) => (
				<BaseToast.Root key={notification.timestamp} asChild className={styles["notification"]}>
					<Flex asChild justify="between" align="center" gap="4" p="4">
						<motion.div
							style={{ transition: "unset" }}
							initial={{ opacity: 0, translateX: "100%" }}
							animate={{ opacity: 1, translateX: "0%" }}
							exit={{ opacity: 0, translateX: "100%" }}
						>
							<Flex direction="column" gap="2">
								<BaseToast.Title asChild>
									<Text weight="medium" color={colorTheme[notification.type] as any}>
										{notification.message}
									</Text>
								</BaseToast.Title>
								{notification.description && <BaseToast.Description>{notification.description}</BaseToast.Description>}
							</Flex>

							<BaseToast.Close asChild onClick={() => dispatch(removeNotification(notification))}>
								<Button variant="outline" size="1" color={colorTheme[notification.type] as any}>
									Close
								</Button>
							</BaseToast.Close>
						</motion.div>
					</Flex>
				</BaseToast.Root>
			))}

			<BaseToast.Viewport className={styles["viewport"]} />
		</BaseToast.Provider>
	);
};
