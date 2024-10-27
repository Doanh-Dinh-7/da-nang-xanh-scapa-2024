import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { HeadProps } from "./type";
import Chart from "./images/Chart.png";
import style from "./style.module.scss";
import { Icon } from "@components";

export const Head = ({ ...props }: HeadProps) => {
    return (
        <Flex align="stretch" gap="8" p="4" style={{ justifyContent: "space-between", width: "100%" }} {...props}>
            <Flex direction="column" gap="5" style={{ justifyContent: "space-between" }}>
                <Flex style={{ border: "1px solid #12B76A", padding: "1vh", borderRadius: "1vw" }}>
                    <Icon ri="ri-checkbox-circle-line" mr="3" />
                    <Text size="2" weight="bold">
                        Tích <span style={{ color: "#12B76A" }}>điểm xanh</span> nhanh hơn với nhóm của bạn!
                    </Text>
                </Flex>
                <img src={Chart} alt="chart" style={{ height: "50vh", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }} />
            </Flex>
            <Flex direction="column" gap="5">
                <Flex direction="column" p="5" gap="2" style={{ background: "#D1FADF", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "1vw" }}>
                    <Text size="6" style={{ fontWeight: "600" }}>
                        Số lượng thành viên đang tham gia
                    </Text>
                    <Flex align="end" style={{ justifyContent: "space-between" }}>
                        <Text size="9" weight="bold" style={{ color: "#027A48" }}>
                            5K+
                        </Text>
                        <Text size="3" style={{ color: "#12B76A", cursor: "pointer" }}>
                            Xem thêm <Icon ri="ri-arrow-right-circle-line" />
                        </Text>
                    </Flex>
                </Flex>
                <Flex direction="column" p="6" gap="6" style={{ background: "#E0F2FE", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "1vw" }}>
                    <Text size="6" style={{ fontWeight: "600" }}>
                        Số lượng chiến dịch đang hoạt động
                    </Text>
                    <Flex align="end" style={{ justifyContent: "space-between" }}>
                        <Text size="9" weight="bold" style={{ color: "#026AA2" }}>
                            13
                        </Text>
                        <Text size="3" style={{ color: "#0BA5EC", cursor: "pointer" }}>
                            Khám phá ngay <Icon ri="ri-arrow-right-circle-line" />
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
