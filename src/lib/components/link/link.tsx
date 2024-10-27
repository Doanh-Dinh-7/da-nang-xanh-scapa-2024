import { Link as LinkUI } from "@radix-ui/themes";
import { Link as LinkTo } from "react-router-dom";

import { LinkProps } from "./type";

export const Link = ({ to, children, ...props }: LinkProps) => {
	return (
		<LinkUI asChild {...props}>
			<LinkTo to={to}>{children}</LinkTo>
		</LinkUI>
	);
};
