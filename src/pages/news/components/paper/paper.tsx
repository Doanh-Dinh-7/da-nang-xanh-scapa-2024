import { Icon } from "@components";
import { Flex, Text } from "@radix-ui/themes";
import Image1 from "./images/decors/image1.png";
import Image2 from "./images/decors/image2.png";
import Image3 from "./images/decors/image3.png";
import Image4 from "./images/decors/image4.png";
import Image5 from "./images/decors/image5.png";
import Image6 from "./images/decors/image6.png";
import { PaperProps } from "./type";

export const Paper = ({ ...props }: PaperProps) => {
    return (
        <Flex direction="column" align="center" justify="between" wrap="wrap" gap="5" style={{ maxHeight: "100vh", overflowY: "auto" }} {...props}>
            {PaperItems.map((item, index) => (
                <Flex
                    key={index}
                    direction="column"
                    style={{ width: "20vw", background: "white", cursor: "pointer", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                >
                    <img src={item.image} alt={item.title} style={{ borderRadius: "10px 10px 0 0" }} /> {/* Hiển thị ảnh */}
                    <Flex direction="column" style={{ padding: "0.5rem" }}>
                        <Text size="4">{item.title}</Text>
                        <Text size="2">
                            <Icon ri="ri-calendar-line" style={{ marginRight: "0.5rem" }} />
                            <span>{item.nonce}</span>
                        </Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};

export const PaperItems = [
    {
        title: "Đà Nẵng: Đến năm 2030 tỷ lệ chất thải rắn sinh hoạt được thu gom, xử lý đảm bảo quy chuẩn kỹ thuật môi trường",
        nonce: "03 Tháng 09, 2024 - 15:48",
        image: Image1,
    },
    {
        title: "Đà Nẵng đứng trước thách thức ô nhiễm “trắng” từ rác thải nhựa",
        nonce: "Thứ Bảy, 07:00, 13/10/2018",
        image: Image2,
    },
    {
        title: "Hơn 360.000 tấn rác thải ở Đà Nẵng sắp không có chỗ chứa",
        nonce: "19 Tháng 06, 2024 - 15:46",
        image: Image3,
    },
    {
        title: "Nơm nớp lo sợ vì sống bên bãi rác khổng lồ ở Đà Nẵng",
        nonce: "19 Tháng 10, 2024",
        image: Image4,
    },
    {
        title: "Quá tải rác: ngòi nổ cho “Cuộc xâm chiếm của rác thải”",
        nonce: "Posted on June, 09 2020",
        image: Image5,
    },
    {
        title: "Đà Nẵng huy động sức mạnh cộng đồng để bảo vệ môi trường",
        nonce: "19 Tháng 10, 2024",
        image: Image6,
    },
];
