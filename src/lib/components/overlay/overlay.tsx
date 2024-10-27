import { OverlayProps } from "@components/overlay/type";
import * as Portal from "@radix-ui/react-portal";
import { Box } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./style.module.scss";

export const Overlay = ({ children, show, handleClose }: OverlayProps) => {
	return (
		<Portal.Root container={document.querySelector<HTMLElement>("#root .radix-themes")}>
			<AnimatePresence>
				{show && (
					<motion.div
						style={{ transition: "unset" }}
						initial={{ opacity: "0%" }}
						animate={{
							opacity: "100%",
						}}
						exit={{
							opacity: "0%",
						}}
						className={styles["my-overlay"]}
					>
						<Box className={styles["overlay"]} onClick={handleClose} />
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</Portal.Root>
	);
};
