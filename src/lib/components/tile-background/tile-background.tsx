import { Box } from "@radix-ui/themes";

import { TileBackgroundImg } from "@global/images";
import { TileBackgroundProps } from "./type";

export const TileBackground = ({ children, style, ...props }: TileBackgroundProps) => {
	return (
		<Box position="relative" style={{ backgroundColor: "var(--accent-1)", overflow: "hidden", ...style }} {...props}>
			<Box position="absolute" top="0" left="0" width="100%" height="100%" style={{ backgroundImage: `url(${TileBackgroundImg})`, backgroundRepeat: "repeat", opacity: "6%" }} />
			<Box position="relative">{children}</Box>
		</Box>
	);
};
