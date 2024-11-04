import { Flex, Text } from "@radix-ui/themes";
import { TrashProps } from "./type";

import { Icon } from "@components";

export const Trash = ({ ...props }: TrashProps) => {
    return (
        <Flex
            align="stretch"
            justify="center"
            gap="8"
            p="3"
            style={{ background: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer" }}
            {...props}
        >
            <Icon ri="ri-delete-bin-7-line" color="green" style={{ fontSize: "15vh" }} />
            <Flex direction="column" justify="center">
                <Text size="6" weight="bold">
                    Báo lỗi & Cải thiện thùng rác thông minh
                </Text>
                <Text mt="5">
                    <i>
                        Hãy chung tay nâng cấp thùng rác thông minh để xây dựng một thành phố xanh, sạch, đẹp! Mỗi người dân hãy trở thành những tuyên truyền viên tích cực, khuyến
                        khích mọi người sử dụng thùng rác đúng cách và báo cáo các hư hỏng kịp thời.
                    </i>
                </Text>
            </Flex>
        </Flex>
    );
};
