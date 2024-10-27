import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { TypeNewsProps } from "./type";

import style from "./style.module.scss";
import { Icon } from "@components";

export const TypeNews = ({ changeIndexPage, tabIndex, ...props }: TypeNewsProps & { changeIndexPage: (index: number) => void }) => {
    return (
        <Flex justify="center" align="stretch" gap="8" {...props}>
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
                <Flex align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-sun-line" style={{ color: tabIndex === 1 ? "#05603A" : "black" }} />
                </Flex>
                <Text size="2" color={tabIndex === 1 ? "green" : "gray"} weight="bold">
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
                <Flex align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-tv-2-line" style={{ color: tabIndex === 2 ? "#F79009" : "black" }} />
                </Flex>
                <Text size="2" weight="bold" style={{ color: tabIndex === 2 ? "#DC6803" : "gray" }}>
                    Tin tức
                </Text>
            </Flex>
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
                <Flex align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-heart-line" style={{ color: tabIndex === 3 ? "#C01048" : "black" }} />
                </Flex>
                <Text size="2" weight="bold" style={{ color: tabIndex === 3 ? "#89123E" : "gray" }}>
                    Chiến dịch tình nguyện
                </Text>
            </Flex>
        </Flex>
    );
};
