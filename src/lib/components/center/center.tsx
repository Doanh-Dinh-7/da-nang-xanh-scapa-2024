import { Flex } from "@radix-ui/themes";
import { CenterProps } from "./type";

export const Center = ({ children, ...props }: CenterProps) => {
	return (
		<Flex justify="center" align="center" {...props}>
			{children}
		</Flex>
	);
};
