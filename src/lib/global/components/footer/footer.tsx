import { Icon, Image, LayoutGrid, Link } from "@components";
import { LogoImg } from "@global/images";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import cls from "classnames";
import { FooterProps } from "./type";

import style from "./style.module.scss";

export const Footer = ({ className, ...props }: FooterProps) => {
    return (
        <Box asChild className={cls(style["footer"], className)} {...props}>
            <footer>
                <Container py="8" className={style["footer-top"]}>
                    <LayoutGrid gap="5">
                        <LayoutGrid.Item
                            asChild
                            span={{
                                initial: "12",
                                md: "6",
                                lg: "4",
                            }}
                            className={style["introduction"]}
                        >
                            <Flex direction="column" align="stretch" gap="6">
                                <Flex align="center" gap="3" className={style["logo"]}>
                                    <Image src={LogoImg} alt="Logo" />
                                    <Text weight="bold" size="3" className={style["name"]}>
                                        Đà Nẵng Xanh
                                    </Text>
                                </Flex>
                                <Text as="p" className={style["description"]}>
                                    Copyright 2024, <strong>Đà Nẵng Xanh</strong>.
                                </Text>
                            </Flex>
                        </LayoutGrid.Item>

                        <LayoutGrid.Item
                            asChild
                            span={{
                                initial: "12",
                                md: "6",
                                lg: "8",
                            }}
                            className={style["navigation"]}
                        >
                            <LayoutGrid columns="6" justify="between" gap="5">
                                <LayoutGrid.Item asChild span="2">
                                    <Flex direction="column" align="stretch" gap="4">
                                        <Text className={style["header"]}>Product</Text>
                                        <Flex direction="column" gap="1">
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Overview
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Feature
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Solutions
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Tutorials
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Pricing
                                            </Link>
                                        </Flex>
                                    </Flex>
                                </LayoutGrid.Item>

                                <LayoutGrid.Item asChild span="2">
                                    <Flex direction="column" align="stretch" gap="4">
                                        <Text className={style["header"]}>Product</Text>
                                        <Flex direction="column" gap="1">
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Overview
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Feature
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Solutions
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Tutorials
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Pricing
                                            </Link>
                                        </Flex>
                                    </Flex>
                                </LayoutGrid.Item>

                                <LayoutGrid.Item asChild span="2">
                                    <Flex direction="column" align="stretch" gap="4">
                                        <Text className={style["header"]}>Product</Text>
                                        <Flex direction="column" gap="1">
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Overview
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Feature
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Solutions
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Tutorials
                                            </Link>
                                            <Link to="#" weight="medium" className={style["item"]}>
                                                Pricing
                                            </Link>
                                        </Flex>
                                    </Flex>
                                </LayoutGrid.Item>
                            </LayoutGrid>
                        </LayoutGrid.Item>
                    </LayoutGrid>
                </Container>

                <Container py="5" className={style["footer-bottom"]}>
                    <Flex justify="between" align="center" gap="5">
                        <Text as="p" className={style["description"]}>
                            © 2023 Đà Nẵng Xanh. All rights reserved.
                        </Text>
                        <Flex align="center" gap="5">
                            <Link asChild to="#" className={style["social"]}>
                                <Icon ri="ri-twitter-x-fill" size="6" />
                            </Link>
                            <Link asChild to="#" className={style["social"]}>
                                <Icon ri="ri-youtube-fill" size="6" />
                            </Link>
                            <Link asChild to="#" className={style["social"]}>
                                <Icon ri="ri-facebook-circle-fill" size="6" />
                            </Link>
                        </Flex>
                    </Flex>
                </Container>
            </footer>
        </Box>
    );
};
