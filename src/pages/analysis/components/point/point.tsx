import { Flex, Heading, Text } from "@radix-ui/themes";
import { PointProps } from "./type";

export const Point = ({ tabIndex, ...props }: PointProps) => {
    return (
        <Flex
            direction="column"
            align="stretch"
            gap="1"
            style={{
                color: tabIndex === 3 ? "white" : "",
                background: tabIndex === 3 ? "#039855" : "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
            }}
            {...props}
        >
            <Heading>120,340</Heading>

            <Text size="3" weight="bold" style={{ marginTop: "15px" }}>
                Điểm xanh
            </Text>
            <Text size="1">đã được trao thưởng</Text>
        </Flex>
    );
};
