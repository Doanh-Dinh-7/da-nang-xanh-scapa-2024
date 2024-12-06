import { Icon } from "@components";
import { Flex, Text } from "@radix-ui/themes";
import { HeadProps } from "./type";
import { useResponsive } from "@services/responsive";

export const Head = ({ ...props }: HeadProps) => {
    const containerResponsive = useResponsive({
        initial: {
            margin: "0 32px",
            statusDirection: "column",
            containerGap: "3",
            headerSize: "1",
            textSize: "1",
            iconSize: "5",
        },
        md: { margin: "0 80px", statusDirection: "row", containerGap: "5", headerSize: "2", textSize: "5", iconSize: "7" },
    });

    return (
        <Flex
            direction="column"
            align="center"
            gap="3"
            {...props}
            style={{
                backgroundColor: "white",
                padding: "10px 20px",
                margin: containerResponsive["margin"],
                marginTop: "1rem",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Text size={containerResponsive["headerSize"]} align="center" style={{ alignSelf: "center", maxWidth: "48rem", color: "gray" }}>
                Khối lượng rác thải đã được phân loại trong 30 ngày qua
            </Text>

            <Flex align="center" justify="center" gap={containerResponsive["containerGap"]}>
                <Flex align="center">
                    <Icon ri="ri-recycle-line" size={containerResponsive["iconSize"]} color="green" style={{ marginRight: "5px" }} />
                    <Text size={containerResponsive["textSize"]} style={{ fontWeight: "600" }}>
                        43kg rác tái chế
                    </Text>
                </Flex>
                <Flex align="center">
                    <Icon ri="ri-recycle-line" size={containerResponsive["iconSize"]} color="yellow" style={{ marginRight: "5px" }} />
                    <Text size={containerResponsive["textSize"]} style={{ fontWeight: "600" }}>
                        20kg rác hữu cơ
                    </Text>
                </Flex>
                <Flex align="center">
                    <Icon ri="ri-recycle-line" size={containerResponsive["iconSize"]} color="red" style={{ marginRight: "5px" }} />
                    <Text size={containerResponsive["textSize"]} style={{ fontWeight: "600" }}>
                        26kg rác vô cơ
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
