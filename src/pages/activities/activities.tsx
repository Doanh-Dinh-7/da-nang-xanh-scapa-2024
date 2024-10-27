import { Seo } from "@global/components";
import { Flex } from "@radix-ui/themes";

import { useEffect } from "react";
import { ActivitiesPageProps } from "./type";
import { Head } from "./components/head";
import { Rank } from "./components/rank";
import { Campaign } from "./components/campaign";

export const ActivitiesPage = ({}: ActivitiesPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    return (
        <>
            <Flex direction="column" align="center" gap="5" style={{ minHeight: "100vh", background: "linear-gradient(to right, #f0fff4, #ffffff)" }}>
                <Flex direction="column" align="center" gap="5" style={{ width: "70vw" }}>
                    <Head />
                    <Rank />
                    <Campaign />
                </Flex>
            </Flex>

            <Seo title="News" />
        </>
    );
};

// Using for lazy loading page
export default ActivitiesPage;
