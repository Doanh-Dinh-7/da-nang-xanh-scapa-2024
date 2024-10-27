import { BoxProps } from "@radix-ui/themes/dist/cjs/components/box";

export type InputQuantityProps = {
	value: number;
	onChange: (newQuantity: number) => void;
	max?: number;
	sizeButton?: Responsive<"4" | "1" | "2" | "3" | "5" | "6" | "7" | "8" | "9">;
	disabled?: boolean;
};
