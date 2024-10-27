import { Flex, Heading, Text } from "@radix-ui/themes";
import { ApplicationProps } from "./type";

import style from "./style.module.scss";
import { Icon } from "@components";

export const Application = ({ ...props }: ApplicationProps) => {
    return (
        <Flex
            align="stretch"
            justify="center"
            gap="8"
            p="3"
            style={{ background: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer" }}
            {...props}
        >
            <Icon ri="ri-terminal-window-fill" style={{ fontSize: "15vh" }} />
            <Flex direction="column" justify="center">
                <Text size="6" weight="bold">
                    Báo lỗi & Cải thiện ứng dụng
                </Text>
                <Text mt="5">
                    <i>
                        Ứng dụng ĐÀ NẴNG XANH luôn lắng nghe ý kiến của bạn. Hãy chia sẻ những trải nghiệm của mình để chúng tôi có thể cải thiện và phát triển ứng dụng một cách
                        hiệu quả."Mỗi báo cáo của bạn là một đóng góp quan trọng để ứng dụng ĐÀ NẴNG XANH trở nên hoàn hảo hơn.
                    </i>
                </Text>
            </Flex>
        </Flex>
    );
};
