import { Seo } from "@global/components";
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { SortedWaste } from "./components/sortedWaste";
import { useEffect, useState } from "react";
import { AnalysisPageProps } from "./type";
import { Landfill } from "./components/landfill";
import { Point } from "./components/point";
import { Bottom } from "./components/bottom";
import { Chart } from "./components/chart";

export const AnalysisPage = ({}: AnalysisPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    const [index, setIndex] = useState(1);

    const changeIndex = (index: number) => {
        setIndex(index);
    };

    return (
        <>
            <Flex direction="column" align="stretch" height="100vh" style={{ background: "linear-gradient(to right, #f0fff4, #ffffff)" }}>
                <Flex direction="column" align="center" style={{ margin: "3vh 7.9vw" }}>
                    <Flex justify="center" align="center" style={{ marginTop: "2vh", marginBottom: "1vh" }}>
                        <Text size="8">
                            Chất lượng môi trường hôm nay <span style={{ color: "green" }}>RẤT TỐT</span>
                        </Text>
                    </Flex>
                    <Flex direction="column">
                        <Flex gap="5">
                            <Flex direction="column" gap="6">
                                <SortedWaste
                                    width="17vw"
                                    height="17vh"
                                    onClick={() => {
                                        changeIndex(1);
                                    }}
                                    tabIndex={index}
                                />
                                <Landfill
                                    width="17vw"
                                    height="17vh"
                                    onClick={() => {
                                        changeIndex(2);
                                    }}
                                    tabIndex={index}
                                />
                                <Point
                                    width="17vw"
                                    height="17vh"
                                    onClick={() => {
                                        changeIndex(3);
                                    }}
                                    tabIndex={index}
                                />
                            </Flex>
                            <Flex style={{ justifyContent: "right" }}>
                                <Chart tabIndex={index} />
                            </Flex>
                        </Flex>
                        <Bottom />
                    </Flex>
                    <Text size="2" weight="bold" color="green">
                        Số liệu được tổng hợp trong 30 ngày qua
                    </Text>
                </Flex>
            </Flex>

            <Seo title="Analysis" />
        </>
    );
};

// Using for lazy loading page
export default AnalysisPage;
