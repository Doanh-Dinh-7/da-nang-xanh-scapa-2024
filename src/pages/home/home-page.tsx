import { Seo } from "@global/components";
import { Box, Flex } from "@radix-ui/themes";
import { useEffect } from "react";
import { Bottom } from "./components/bottom";
import { Control } from "./components/control";
import { Head } from "./components/head";
import { HomePageProps } from "./type";

import { SmartRecycleBinMap } from "./components";
import styles from "./styles.module.scss";

export const HomePage = ({}: HomePageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    return (
        <>
            <Flex
                position="relative"
                direction="column"
                align="stretch"
                gap="3"
                style={{
                    height: "100vh",
                }}
            >
                <Box className={styles["map-container"]}>
                    <SmartRecycleBinMap />
                </Box>
                <Head className={styles["control"]} />
                <Control className={styles["control"]} />
                <Bottom width="1072" height="108" className={styles["control"]} />
            </Flex>

            <Seo title="Home" />
        </>
    );
};

// Using for lazy loading page
export default HomePage;
