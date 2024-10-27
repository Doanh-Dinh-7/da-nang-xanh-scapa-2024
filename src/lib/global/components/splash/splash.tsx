import { useEffect } from "react";
import { Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useAppSelector } from "@store";
import { shallowEqual } from "react-redux";
import { SplashProps } from "./type";

export const Splash = ({}: SplashProps) => {
	const { isPageLoading } = useAppSelector((state) => state.loading, shallowEqual);
	useEffect(() => {}, [isPageLoading]);

	return (
		<motion.div
			style={{ transition: "unset" }}
			initial={{ opacity: "100%" }}
			animate={{
				opacity: "0%",
				transitionEnd: {
					display: "none",
				},
			}}
			transition={{ duration: 1.5 }}
		>
			<Flex position="fixed" top="0" left="0" justify="center" align="center" width="100%" height="100%" style={{ backgroundColor: "var(--accent-2)" }}>
				<h1>Loading...</h1>
			</Flex>
		</motion.div>
	);
};
