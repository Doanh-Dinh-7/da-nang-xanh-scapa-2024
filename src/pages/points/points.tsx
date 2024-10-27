import { Seo } from "@global/components";
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";

import { useEffect, useState } from "react";
import { PointPageProps } from "./type";
import { View } from "./components/view";
import { Products } from "./components/products";
import { Icon } from "@components";

export const PointPage = ({}: PointPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    return (
        <>
            <Flex direction="column" align="center" gap="5" style={{ background: "linear-gradient(to right, #f0fff4, #ffffff)", justifyContent: "space-around" }}>
                <Flex mt="5">
                    <View />
                </Flex>
                <Text size="8" color="green">
                    <Icon ri="ri-gift-line" style={{ marginRight: "1vw" }} />
                    ĐỔI QUÀ
                </Text>
                <Products />
                <br />
            </Flex>

            <Seo title="News" />
        </>
    );
};

// Using for lazy loading page
export default PointPage;
