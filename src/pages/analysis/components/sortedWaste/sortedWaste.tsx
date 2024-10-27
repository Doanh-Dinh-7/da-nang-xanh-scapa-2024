import { Flex, Heading, Text } from "@radix-ui/themes";
import { SortedWasteProps } from "./type";

import style from "./style.module.scss";

export const SortedWaste = ({ tabIndex, ...props }: SortedWasteProps) => {
    return (
        <Flex
            direction="column"
            align="stretch"
            gap="1"
            style={{
                color: tabIndex === 1 ? "white" : "",
                background: tabIndex === 1 ? "#039855" : "white",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
            }}
            {...props}
        >
            <Heading>120kg</Heading>

            <Text size="3" weight="bold" style={{ marginTop: "15px" }}>
                Rác thải
            </Text>
            <Text size="1">đã được phân loại</Text>
        </Flex>
    );
};
