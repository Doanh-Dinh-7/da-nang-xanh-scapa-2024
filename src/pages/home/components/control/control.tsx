import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { ControlProps } from "./type";

import style from "./style.module.scss";
import { Icon } from "@components";

export const Control = ({ ...props }: ControlProps) => {
    return (
        <Flex position="absolute" right="2" direction="column" align="stretch" gap="3" {...props} style={{ height: "50vh", width: "5vw", margin: "5vh 0" }}>
            <Flex direction="column" style={{ height: "14vh", width: "3.5vw", borderRadius: "20px", background: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                {/* Dấu cộng */}
                <Flex align="center" justify="center" style={{ height: "50%", width: "100%", cursor: "pointer" }}>
                    <Icon ri="ri-add-line" size="7" />
                </Flex>
                {/* Đường kẻ giữa */}
                <div
                    style={{
                        width: "100%",
                        height: "3px",
                        background: "#d1d5db",
                    }}
                />
                {/* Dấu trừ */}
                <Flex align="center" justify="center" style={{ height: "50%", width: "100%", cursor: "pointer" }}>
                    <Icon ri="ri-subtract-line" size="7" />
                </Flex>
            </Flex>
            <Flex
                align="center"
                justify="center"
                style={{ cursor: "pointer", height: "7vh", width: "3.5vw", borderRadius: "50px", background: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
                <Icon ri="ri-focus-2-line" size="6" />
            </Flex>
            <Flex
                align="center"
                justify="center"
                style={{ cursor: "pointer", height: "7vh", width: "3.5vw", borderRadius: "50px", background: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
                <Icon ri="ri-search-line" size="6" />
            </Flex>
            <Flex
                align="center"
                justify="center"
                style={{ cursor: "pointer", height: "7vh", width: "3.5vw", borderRadius: "50px", background: "var(--red-5)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
                <Icon ri="ri-flag-line" size="6" color="red" />
            </Flex>
        </Flex>
    );
};
