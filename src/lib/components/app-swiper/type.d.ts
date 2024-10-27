import { BoxProps } from "@radix-ui/themes/dist/cjs/components/box";
import Swiper, { SwiperOptions } from "swiper";

export type AppSwiperProps = BoxProps & {
	options?: SwiperOptions;
	onInitiated?: (swiper: Swiper) => void;
	watchers?: any[];
};

export type AppSwiperSlideProps = BoxProps & {};
