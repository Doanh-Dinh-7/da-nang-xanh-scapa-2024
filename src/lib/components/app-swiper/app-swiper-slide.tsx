import { Box } from "@radix-ui/themes";
import { AppSwiperSlideProps } from "./type";

export const AppSwiperSlide = ({ children, ...props }: AppSwiperSlideProps) => {
	return (
		<Box className="swiper-slide" {...props}>
			{children}
		</Box>
	);
};
