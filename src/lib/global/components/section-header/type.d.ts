import { SectionProps } from "@radix-ui/themes/dist/cjs/components/section";

export type SectionHeaderProps = SectionProps & {
	title: string;
	imgSrc: string;
	theme?: string;
};
