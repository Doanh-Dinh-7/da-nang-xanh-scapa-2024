import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { CampaignProps } from "./type";
import style from "./style.module.scss";
import { Icon } from "@components";
import Campaign1 from "./images/campaign1.png";
import Campaign2 from "./images/campaign2.png";
import Campaign3 from "./images/campaign3.png";
import Campaign4 from "./images/campaign4.png";
import Campaign5 from "./images/campaign5.png";
import Campaign6 from "./images/campaign6.png";

export const Campaign = ({ ...props }: CampaignProps) => {
    return (
        <Flex direction="column" align="stretch" gap="8" p="4" style={{ width: "100%" }} {...props}>
            <Flex direction="column" align="start" justify="start" gap="5" style={{ width: "100%" }}>
                <Heading size="5">Chiến Dịch Cộng Đồng</Heading>
                <Text size="3" style={{ color: "#98A2B3", fontWeight: "600" }}>
                    Cùng tham gia bảo vệ môi trường với chúng tôi
                </Text>
            </Flex>
            <Flex wrap="wrap" align="start" justify="between" gap="5">
                {CampaignItems.map((item, index) => (
                    <Flex
                        key={index}
                        direction="column"
                        gap="3"
                        style={{
                            width: "31%",

                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            borderRadius: "1vw",
                            backgroundColor: "#fff",
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                borderRadius: "1vw 1vw 0 0",
                            }}
                        />
                        <Flex direction="column" p="3" gap="3">
                            <Flex>
                                <Text
                                    style={{
                                        padding: "1vh 1vw",
                                        backgroundColor: item.category === 1 ? "#ECFDF3" : "#FFFAEB",
                                        color: item.category === 1 ? "#05603A" : "#B54708",
                                        borderRadius: "1vh",
                                    }}
                                >
                                    {item.category === 1 ? "BẢO VỆ MÔI TRƯỜNG" : "GIÁO DỤC"}
                                </Text>
                            </Flex>

                            <Text size="6" weight="bold">
                                {item.title}
                            </Text>
                            <Text
                                size="2"
                                style={{
                                    color: "#98A2B3",
                                }}
                            >
                                {item.content}
                            </Text>
                            <Flex align="center" gap="3" style={{ width: "100%" }}>
                                <Flex overflow="hidden" style={{ width: "85%", backgroundColor: "#F2F4F7", borderRadius: "1vw" }}>
                                    <Flex style={{ width: item.percent, backgroundColor: "#039855", height: "1vh" }}></Flex>
                                </Flex>
                                <Text size="3" style={{ fontWeight: "500" }}>
                                    {item.percent}
                                </Text>
                            </Flex>
                            <Flex align="center" style={{ justifyContent: "space-between" }}>
                                <Text size="4" style={{ fontWeight: "600", color: "#039855" }}>
                                    <Icon ri="ri-star-line" style={{ fontWeight: "100", marginRight: "1vh" }} />
                                    {item.point}
                                </Text>
                                <Flex align="center" justify="center" gap="3">
                                    <Text style={{ color: "#98A2B3" }}>Mục tiêu</Text>
                                    <Text size="4" style={{ fontWeight: "600", color: "#039855" }}>
                                        <Icon ri="ri-star-line" style={{ fontWeight: "100", marginRight: "1vh" }} />
                                        {item.target}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export const CampaignItems = [
    {
        title: "Chiến dịch làm sạch biển",
        category: 1,
        image: Campaign1,
        content: "Chiến dịch “Hãy làm sạch biển” bảo vệ môi trường, hưởng ứng phong trào “Chống rác thải nhựa” với mụ...",
        percent: "70%",
        point: "1,758",
        target: "2,000",
    },
    {
        title: "Vì một tương lai xanh",
        category: 2,
        image: Campaign2,
        content: "Ngày nay, ô nhiễm môi trường đang là vấn đề nóng được cả thế giới quan tâm. Hiểu rõ tầm quan trọng...",
        percent: "50%",
        point: "800",
        target: "1,600",
    },
    {
        title: "Chiến dịch làm cho thế giới sạch hơn năm 2024",
        category: 1,
        image: Campaign3,
        content: "Chiến dịch “Hãy làm sạch biển” bảo vệ môi trường, hưởng ứng phong trào “Chống rác thải nhựa” với mụ...",
        percent: "40%",
        point: "1,688",
        target: "4,000",
    },
    {
        title: "Hưởng ứng ngày trái đất và môi trường",
        category: 2,
        image: Campaign4,
        content: "Khởi đầu là Sự kiện ngày hội tái chế rác thải dành cho trẻ em và các gia đình; tiếp đến xây dựng và tổ chức...",
        percent: "80%",
        point: "1,354",
        target: "1,500",
    },
    {
        title: "Chiến dịch Thanh niên tình nguyện Hè",
        category: 1,
        image: Campaign5,
        content: "Chung tay bảo vệ môi trường và ứng phó với biến đổi khí hậu là “cuộc chiến” dài hơi, xuyên suốt v...",
        percent: "40%",
        point: "853",
        target: "2,000",
    },
    {
        title: "Suy nghĩ xanh, Hành động xanh - Vì một môi trường xanh",
        category: 2,
        image: Campaign6,
        content: "Tại ngày hội, các đoàn viên, thanh niên ra quân tôn tạo cảnh quan, khơi thông lối thoát nước; tập huấn “Lối…",
        percent: "50%",
        point: "539",
        target: "1,000",
    },
];
