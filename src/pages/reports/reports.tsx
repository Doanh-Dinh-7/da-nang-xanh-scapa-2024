import { Seo } from "@global/components";
import { Flex, Text } from "@radix-ui/themes";

import { useEffect } from "react";
import { Application, Trash, Waste } from "./components";
import { ReportPageProps } from "./type";

export const ReportPage = ({}: ReportPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    return (
        <>
            <Flex direction="column" align="stretch" style={{ background: "linear-gradient(to right, #f0fff4, #ffffff)", height: "100vh" }}>
                <Flex direction="column" align="center" style={{ margin: "3vh 7.9vw" }}>
                    <Flex justify="center" align="center" style={{ marginTop: "2vh", marginBottom: "1vh" }}>
                        <Text size="8">Hãy chung tay bảo vệ môi trường!</Text>
                    </Flex>
                    <Flex direction="column" gap="2" p="3">
                        <Waste />
                        <Trash />
                        <Application />
                    </Flex>
                </Flex>
            </Flex>

            <Seo title="Reports" />
        </>
    );
};

// Using for lazy loading page
export default ReportPage;
