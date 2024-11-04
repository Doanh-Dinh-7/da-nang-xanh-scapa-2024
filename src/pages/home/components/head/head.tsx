import { Icon } from "@components";
import { Flex, Text } from "@radix-ui/themes";
import { HeadProps } from "./type";

export const Head = ({ ...props }: HeadProps) => {
    return (
        <Flex
            direction="column"
            align="center"
            gap="3"
            {...props}
            style={{ backgroundColor: "white", padding: "10px 20px", margin: "0 80px", marginTop: "1rem", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
            <Text size="2" align="center" style={{ alignSelf: "center", maxWidth: "48rem", color: "gray" }}>
                Khối lượng rác thải đã được phân loại trong 30 ngày qua
            </Text>

            <Flex direction="row" align="center" justify="center" gap="5">
                <Flex align="center">
                    <Icon ri="ri-recycle-line" size="7" color="green" style={{ marginRight: "5px" }} />
                    <Text size="5" style={{ fontWeight: "600" }}>
                        43kg rác tái chế
                    </Text>
                </Flex>
                <Flex align="center">
                    <Icon ri="ri-recycle-line" size="7" color="yellow" style={{ marginRight: "5px" }} />
                    <Text size="5" style={{ fontWeight: "600" }}>
                        20kg rác hữu cơ
                    </Text>
                </Flex>
                <Flex align="center">
                    <Icon ri="ri-recycle-line" size="7" color="red" style={{ marginRight: "5px" }} />
                    <Text size="5" style={{ fontWeight: "600" }}>
                        26kg rác vô cơ
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
