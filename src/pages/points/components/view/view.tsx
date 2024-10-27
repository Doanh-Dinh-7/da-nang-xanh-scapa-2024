import { Flex, Heading, Text } from "@radix-ui/themes";
import { ViewProps } from "./type";

import style from "./style.module.scss";
import Start from "./images/star.png";

export const View = ({ ...props }: ViewProps) => {
    return (
        <Flex align="center" gap="8" style={{ justifyContent: "space-between", width: "75vw" }} {...props}>
            <Flex
                justify="center"
                align="center"
                style={{
                    width: "45vw",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    background: "#05603A",
                    justifyContent: "space-between",
                    padding: "1rem",
                }}
            >
                <Flex gap="4" direction="column" style={{ marginLeft: "1vw" }}>
                    <Text size="7" style={{ color: "white" }}>
                        Bạn đã có
                    </Text>
                    <Flex gap="5" style={{ color: "#6CE9A6", fontWeight: "700" }}>
                        <Text size="9">104</Text>
                        <Text size="3">ĐIỂM XANH</Text>
                    </Flex>
                </Flex>
                <img src={Start} alt="start" style={{ height: "20vh", marginRight: "1vw" }} />
            </Flex>
            <Flex
                justify="center"
                align="center"
                style={{
                    height: "100%",
                    width: "25vw",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    background: "#D1FADF",
                    padding: "1rem",
                }}
            >
                <Flex gap="4" direction="column" style={{ marginLeft: "1vw" }}>
                    <Text size="7" style={{ color: "#344054" }}>
                        Bạn đã đã phân loại rác
                    </Text>
                    <Flex gap="5" style={{ color: "#027A48", fontWeight: "700" }}>
                        <Text size="9">05</Text>
                        <Text size="3">NGÀY LIÊN TỤC</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
