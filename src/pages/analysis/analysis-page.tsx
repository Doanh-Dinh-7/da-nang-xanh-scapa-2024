import { Seo } from "@global/components";
import { Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Bottom } from "./components/bottom";
import { Chart } from "./components/chart";
import { Landfill } from "./components/landfill";
import { Point } from "./components/point";
import { SortedWaste } from "./components/sortedWaste";
import { AnalysisPageProps } from "./type";
import { useResponsive } from "@services/responsive";

export const AnalysisPage = ({}: AnalysisPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    const [index, setIndex] = useState(1);

    const responsive = useResponsive({
        initial: {
            shouldShowChart: false,
        },
        md: {
            shouldShowChart: true,
        },
    });

    const changeIndex = (index: number) => {
        setIndex(index);
    };

    return (
        <>
            <Flex direction="column" align="stretch" style={{ minHeight: "100vh", background: "linear-gradient(to right, #f0fff4, #ffffff)" }}>
                <Flex direction="column" align="center" style={{ margin: "3vh 7.9vw" }}>
                    <Flex justify="center" align="center" style={{ marginTop: "2vh", marginBottom: "1vh" }}>
                        <Text size="8">
                            Chất lượng môi trường hôm nay <span style={{ color: "green" }}>RẤT TỐT</span>
                        </Text>
                    </Flex>
                    <Flex direction="column">
                        <Flex gap="5" justify="center">
                            <Flex direction="column" gap="5">
                                <SortedWaste
                                    width="200px"
                                    height="150px"
                                    onClick={() => {
                                        changeIndex(1);
                                    }}
                                    tabIndex={index}
                                />
                                <Landfill
                                    width="200px"
                                    height="150px"
                                    onClick={() => {
                                        changeIndex(2);
                                    }}
                                    tabIndex={index}
                                />
                                <Point
                                    width="200px"
                                    height="150px"
                                    onClick={() => {
                                        changeIndex(3);
                                    }}
                                    tabIndex={index}
                                />
                            </Flex>
                            {responsive.shouldShowChart && (
                                <Flex flexGrow="1" style={{ justifyContent: "right" }}>
                                    <Chart tabIndex={index} />
                                </Flex>
                            )}
                        </Flex>
                        <Bottom />
                    </Flex>
                    <Text size="2" weight="bold" color="green" mb="5">
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
