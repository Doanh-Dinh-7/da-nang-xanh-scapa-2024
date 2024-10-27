import { Center } from "@components";
import { Box, Heading } from "@radix-ui/themes";
import { SectionTitleProps } from "./type";

import style from "./style.module.scss";

export const SectionTitle = ({ children, ...props }: SectionTitleProps) => {
	return (
		<Center gap="6" {...props}>
			<Box className={style["line"]} />
			<Heading
				as="h1"
				size={{
					initial: "3",
					md: "6",
				}}
				className={style["title"]}
			>
				{children}
			</Heading>
			<Box className={style["line"]} />
		</Center>
	);
};
