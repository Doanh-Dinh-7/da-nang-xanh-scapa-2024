import { Flex, Text } from "@radix-ui/themes";
import { TypeNewsProps } from "./type";
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
                    <Icon ri="ri-delete-bin-7-line" style={{ color: tabIndex === 1 ? "green" : "black" }} />
                </Flex>
                <Text size="2" color={tabIndex === 1 ? "green" : "gray"} weight="bold">
                    Thùng rác thông minh
                </Text>
            </Flex>
            <Flex
                onClick={() => changeIndexPage(2)}
                justify="center"
                align="center"
                style={{
                    background: tabIndex === 2 ? "#A6F4C5" : "#F2F4F7",
                    padding: "8px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Flex align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-prohibited-line" style={{ color: tabIndex === 2 ? "green" : "black" }} />
                </Flex>
                <Text size="2" weight="bold" style={{ color: tabIndex === 2 ? "green" : "gray" }}>
                    Bãi rác tự phát
                </Text>
            </Flex>
            <Flex
                onClick={() => changeIndexPage(3)}
                justify="center"
                align="center"
                style={{
                    background: tabIndex === 3 ? "#A6F4C5" : "#F2F4F7",
                    padding: "8px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Flex align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-emotion-unhappy-line" style={{ color: tabIndex === 3 ? "green" : "black" }} />
                </Flex>
                <Text size="2" weight="bold" style={{ color: tabIndex === 3 ? "green" : "gray" }}>
                    Danh sách lỗi
                </Text>
            </Flex>
        </Flex>
    );
};
