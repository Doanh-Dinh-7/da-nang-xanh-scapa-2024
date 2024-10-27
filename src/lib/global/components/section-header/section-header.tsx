import { Center, Image, LayoutGrid } from "@components";
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { SectionHeaderProps } from "./type";
import cls from "classnames";

import styles from "./style.module.scss";

export const SectionHeader = ({ title, imgSrc, theme = "accent", className, style, children, ...props }: SectionHeaderProps) => {
	return (
		<Section
			size="2"
			className={cls(styles["container"], className)}
			style={{
				backgroundColor: `var(--${theme}-2)`,
				...style,
			}}
			{...props}
		>
			<Container>
				<LayoutGrid>
					<LayoutGrid.Item
						asChild
						span={{
							initial: "12",
							md: "8",
						}}
					>
						<Flex direction="column" gap="6">
							<Heading
								className={styles["title"]}
								style={{
									color: `var(--${theme}-9)`,
									...style,
								}}
								size="7"
							>
								{title}
							</Heading>
							<Text className={styles["description"]}>{children}</Text>
						</Flex>
					</LayoutGrid.Item>

					<LayoutGrid.Item asChild span="4">
						<Center
							display={{
								initial: "none",
								md: "flex",
							}}
						>
							<Image src={imgSrc} style={{ maxWidth: "8rem" }} />
						</Center>
					</LayoutGrid.Item>
				</LayoutGrid>
			</Container>
		</Section>
	);
};
