import { Responsive } from "@radix-ui/themes";
import { BoxProps } from "@radix-ui/themes/dist/cjs/components/box";

export type ImageProps = Omit<BoxProps, "width", "height", "asChild"> &
	React.ComponentPropsWithoutRef<"img"> & {
		width?: Responsive<string>;
		height?: Responsive<string>;
		objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
	};
