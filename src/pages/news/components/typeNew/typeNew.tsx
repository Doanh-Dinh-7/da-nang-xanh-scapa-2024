import { Flex, Text } from "@radix-ui/themes";
import { TypeNewsProps } from "./type";
import { Icon } from "@components";
import { useResponsive } from "@services/responsive";

export const TypeNews = ({ changeIndexPage, tabIndex, ...props }: TypeNewsProps & { changeIndexPage: (index: number) => void }) => {
    const responsive = useResponsive({
        initial: {
            containerGap: "2",
            headerSize: "1",
            shouldShowVoulunteer: false,
        },
        md: {
            containerGap: "5",
            headerSize: "2",
            shouldShowVoulunteer: true,
        },
    });

    return (
        <Flex justify="center" align="stretch" gap={responsive["containerGap"]} {...props}>
            <Flex
                onClick={() => changeIndexPage(1)}
                justify="center"
                align="center"
                style={{
                    background: tabIndex === 1 ? "#A6F4C5" : "#F2F4F7",
                    padding: "8px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Flex flexShrink="0" align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-sun-line" style={{ color: tabIndex === 1 ? "#05603A" : "black" }} />
                </Flex>
                <Text size={responsive["headerSize"]} color={tabIndex === 1 ? "green" : "gray"} weight="bold">
                    Dự án môi trường
                </Text>
            </Flex>
            <Flex
                onClick={() => changeIndexPage(2)}
                justify="center"
                align="center"
                style={{
                    background: tabIndex === 2 ? "#FEDF89" : "#F2F4F7",
                    padding: "8px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Flex flexShrink="0" align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-tv-2-line" style={{ color: tabIndex === 2 ? "#F79009" : "black" }} />
                </Flex>
                <Text size={responsive["headerSize"]} weight="bold" style={{ color: tabIndex === 2 ? "#DC6803" : "gray" }}>
                    Tin tức
                </Text>
            </Flex>
            {responsive["shouldShowVoulunteer"] && (
                <Flex
                    onClick={() => changeIndexPage(3)}
                    justify="center"
                    align="center"
                    style={{
                        background: tabIndex === 3 ? "#FCE7F6" : "#F2F4F7",
                        padding: "8px 10px",
                        borderRadius: "20px",
                        cursor: "pointer",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Flex flexShrink="0" align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                        <Icon ri="ri-heart-line" style={{ color: tabIndex === 3 ? "#C01048" : "black" }} />
                    </Flex>
                    <Text size={responsive["headerSize"]} weight="bold" style={{ color: tabIndex === 3 ? "#89123E" : "gray" }}>
                        Chiến dịch tình nguyện
                    </Text>
                </Flex>
            )}
        </Flex>
    );
};
