import { Flex, Text } from "@radix-ui/themes";
import { ViewProps } from "./type";

import { useResponsive } from "@services/responsive";
import { useAppSelector } from "@store";

export const View = ({ ...props }: ViewProps) => {
    const { user } = useAppSelector((state) => state.globalStates);

    const responsive = useResponsive({
        initial: {
            containerDirection: "column",
        },
        md: {
            containerDirection: "row",
        },
    });

    return (
        <Flex direction={responsive["containerDirection"]} gap="8" style={{ width: "75vw" }} {...props}>
            <Flex
                flexGrow="1"
                justify="center"
                align="center"
                style={{
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
                        <Text size="9">{user?.greenPoint}</Text>
                        <Text size="3">ĐIỂM XANH</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                flexGrow="1"
                justify="center"
                align="center"
                style={{
                    height: "100%",
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
