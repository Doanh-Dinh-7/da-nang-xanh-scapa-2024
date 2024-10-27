import { Em, Flex, Heading, Text } from "@radix-ui/themes";
import { WasteProps } from "./type";

import style from "./style.module.scss";
import { Icon } from "@components";

export const Waste = ({ ...props }: WasteProps) => {
    return (
        <Flex
            align="stretch"
            justify="center"
            gap="8"
            p="3"
            style={{ background: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer" }}
            {...props}
        >
            <Icon ri="ri-recycle-line" color="red" style={{ fontSize: "15vh" }} />
            <Flex direction="column" justify="center">
                <Text size="6" weight="bold">
                    Báo cáo bãi rác tự phát
                </Text>
                <Text mt="5">
                    <i>
                        Bãi rác tự phát như những 'vết nhơ' xấu xí trên gương mặt thành phố. Hãy cùng nhau 'lau sạch' chúng để thành phố luôn tươi tắn, rạng ngời. Mỗi cuộc gọi báo
                        cáo của bạn chính là một giọt nước nhỏ góp vào dòng sông làm sạch môi trường.
                    </i>
                </Text>
            </Flex>
        </Flex>
    );
};
