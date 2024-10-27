/// <reference types="react-scripts" />
declare module "*.png" {
	const value: any;
	export default value;
}

declare namespace JSX {
	interface IntrinsicElements {
		"swiper-container": any;
		"swiper-slide": any;
	}
}
