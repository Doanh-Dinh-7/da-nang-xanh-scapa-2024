import { Flex, Text } from "@radix-ui/themes";
import { VolunteerProps } from "./type";
import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";
import { Icon } from "@components";

export const Volunteer = ({ ...props }: VolunteerProps) => {
    return (
        <Flex direction="column" align="center" gap="5" style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
            {VolunteerItems.map((item, index) => (
                <Flex
                    overflow="hidden"
                    key={index}
                    style={{
                        display: "flex",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        marginBottom: "1rem",
                        // borderLeft: "5px solid #a0e7e5",
                        cursor: "pointer",
                        alignItems: "center", // Center-aligns content vertically
                    }}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            height: "100%",
                            borderRadius: " 0 10vw 0 0",
                            borderRight: "5px solid #a0e7e5",
                            objectFit: "contain",
                            flexShrink: 0, // Prevents the image from shrinking
                        }}
                    />
                    <Flex direction="column" overflow="hidden" style={{ padding: "1rem", justifyContent: "space-between", flex: 1 }}>
                        <Text size="4" weight="bold" style={{ fontSize: "1.25rem", fontWeight: "700", color: "#333", marginBottom: "0.5rem" }}>
                            {item.title}
                        </Text>
                        <Text size="2" style={{ fontSize: "1rem", color: "#555", marginBottom: "1rem" }}>
                            {item.content}
                        </Text>
                        <Flex align="center" gap="2" style={{ display: "flex", alignItems: "center", color: "#777" }}>
                            <Icon ri="ri-calendar-line" />
                            <Text size="2" style={{ fontSize: "0.875rem", color: "#777" }}>
                                {item.date}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};

export const VolunteerItems = [
    {
        title: "Đà Nẵng khởi động chiến dịch môi trường 2022",
        content:
            "Ngày 19-2, Sở Tài nguyên và Môi trường (TN-MT) TP Đà Nẵng phối hợp với các cơ quan, đơn vị liên quan tổ chức lễ ra quân vệ sinh môi trường đầu năm 2022 và tăng cường các biện pháp phòng chống dịch bệnh truyền nhiễm trên địa bàn.",
        date: "19 Tháng 10, 2024",
        image: Image1,
    },
    {
        title: "Đà Nẵng “mạnh tay” đầu tư cải thiện môi trường nước",
        content:
            "Trong đề án “Xây dựng Đà Nẵng – Thành phố môi trường” giai đoạn 2021-2030, TP. Đà Nẵng đặt mục tiêu tiếp tục duy trì, giữ vững và nâng cao các mục tiêu xây dựng thành phố môi trường theo đề án phê duyệt năm 2028. Phấn đấu đến năm 2025, Đà Nẵng đáp ứng các mục tiêu, chỉ tiêu đặt ra, ...",
        date: "01/10/2024",
        image: Image2,
    },
    {
        title: 'Quyết tâm xây dựng "Thành phố môi trường"',
        content:
            "Sau 25 năm trở thành thành phố trực thuộc Trung ương (1997-2022), cùng với xây dựng, phát triển mở rộng không gian đô thị, chăm lo đời sống nhân dân, thành phố đã tập trung nhiều giải pháp xây dựng thành phố môi trường, thành phố xanh và đã đạt được nhiều kết quả nổi bật, góp phần đưa Đà Nẵng trở thành điểm đến hấp dẫn của ...",
        date: "12/01/2023",
        image: Image3,
    },
];
