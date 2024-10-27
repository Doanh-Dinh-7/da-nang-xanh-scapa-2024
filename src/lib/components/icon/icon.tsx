import { Text } from "@radix-ui/themes";
import { IconProps } from "./type";

export const Icon = ({ ri, ...props }: IconProps) => {
	return (
		<Text asChild {...props}>
			<i className={ri}></i>
		</Text>
	);
};
