import { Box } from "@radix-ui/themes";
import cls from "classnames";
import { motion } from "framer-motion";
import { SkeletonProps } from "./type";

import styles from "./style.module.scss";

export const Skeleton = ({ children, className, ...props }: SkeletonProps) => {
	return (
		<Box asChild width="100%" height="100%" className={cls(styles["skeleton"], className)} {...props}>
			<motion.div
				style={{ transition: "unset" }}
				animate={{
					backgroundPositionX: ["100%", "0%"],
				}}
				transition={{
					duration: 1,
					repeat: Infinity,
					repeatDelay: 1,
				}}
			>
				{children}
			</motion.div>
		</Box>
	);
};
