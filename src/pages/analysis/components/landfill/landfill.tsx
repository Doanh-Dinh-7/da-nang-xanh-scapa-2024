import { Flex, Heading, Text } from "@radix-ui/themes";
import { LandfillProps } from "./type";

export const Landfill = ({ tabIndex, ...props }: LandfillProps) => {
    return (
        <Flex
            direction="column"
            align="stretch"
            gap="1"
            style={{
                color: tabIndex === 2 ? "white" : "",
                background: tabIndex === 2 ? "#039855" : "white",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
            }}
            {...props}
        >
            <Heading>06</Heading>

            <Text size="3" weight="bold" style={{ marginTop: "15px" }}>
                Bãi rác tự phát
            </Text>
            <Text size="1">đã được phát hiện</Text>
        </Flex>
    );
};
