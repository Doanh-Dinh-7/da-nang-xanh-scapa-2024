import { Box } from "@radix-ui/themes";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { AppSwiperProps } from "./type";
import cls from "classnames";

// ALl Swiper styles
import "swiper/css/bundle";

export const AppSwiper = ({ children, className, options = {}, onInitiated = () => {}, watchers = [], ...props }: AppSwiperProps) => {
	const swiperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!swiperRef.current) return;

		// Initiate swiper
		const swiper = new Swiper(swiperRef.current, options);

		// Expose swiper
		onInitiated(swiper);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, watchers);

	return (
		<Box className={cls("swiper", className)} ref={swiperRef} {...props}>
			<Box className="swiper-wrapper">{children}</Box>
		</Box>
	);
};
