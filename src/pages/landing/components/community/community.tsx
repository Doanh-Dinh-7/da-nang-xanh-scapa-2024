import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { CommunityProps } from "./type";
import { Icon } from "@components";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
// import useImage from "./images/useImage.png";

export const Community = ({ ...props }: CommunityProps) => {
    return (
        <Flex
            id="community"
            direction={"column"}
            width={"100%"}
            style={{
                padding: "4rem 2rem",
                justifyContent: "space-between",
                gap: "2rem",
            }}
        >
            {/* Phần nội dung bên trái */}
            <Flex direction={"column"} style={{ flex: 1, maxWidth: "30vw" }}>
                <Text
                    style={{
                        color: "#777",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                        marginBottom: "1rem",
                        gap: "1rem",
                    }}
                >
                    <hr style={{ width: "2vw", borderTop: "2px solid", borderBottom: "none", borderLeft: "none", borderRight: "none", display: "inline-block", margin: 5 }} /> Hoạt
                    động cộng đồng
                </Text>
                <Heading
                    style={{
                        color: "#333",
                        fontSize: "2.5rem",
                        marginBottom: "1rem",
                        lineHeight: "1.4",
                    }}
                >
                    <span style={{ color: "#27ae60" }}>Phân loại</span> vì một thế giới tốt đẹp hơn
                </Heading>
            </Flex>

            <Flex style={{ justifyContent: "space-between" }}>
                <Flex
                    direction={"column"}
                    style={{
                        height: "auto",
                        width: "21vw",
                        position: "relative", // Quan trọng để đặt overlay
                        backgroundImage: `url(${image1})`, // Thay '#' bằng URL hình ảnh nền nếu có
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "10px",
                        color: "white",
                        padding: "2rem",
                        overflow: "hidden", // Đảm bảo không có phần dư thừa
                    }}
                >
                    {/* Lớp phủ mờ */}
                    <Box
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.3)", // Màu đen mờ
                            zIndex: 1, // Đặt lớp phủ dưới nội dung
                        }}
                    />

                    <Flex direction={"column"} style={{ zIndex: 2 }} gap={"1rem"}>
                        <Text weight={"bold"} style={{ fontSize: "1.5rem" }} mt={"1.5rem"}>
                            Đà Nẵng khởi động chiến dịch môi trường 2022
                        </Text>
                        <Text style={{ fontSize: "0.8rem" }}>
                            Ngày 19-2, Sở Tài nguyên và Môi trường (TN-MT) TP Đà Nẵng phối hợp với các cơ quan, đơn vị liên quan tổ chức lễ ra quân vệ sinh môi trường đầu năm 2022.
                        </Text>
                        <Flex>
                            <Button style={{ background: "white", color: "black" }} onClick={() => (window.location.href = "/news")}>
                                Xem thêm
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    direction={"column"}
                    style={{
                        height: "auto",
                        width: "21vw",
                        position: "relative", // Quan trọng để đặt overlay
                        backgroundImage: `url(${image2})`, // Thay '#' bằng URL hình ảnh nền nếu có
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "10px",
                        color: "white",
                        padding: "2rem",
                        overflow: "hidden", // Đảm bảo không có phần dư thừa
                    }}
                >
                    {/* Lớp phủ mờ */}
                    <Box
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.3)", // Màu đen mờ
                            zIndex: 1, // Đặt lớp phủ dưới nội dung
                        }}
                    />

                    <Flex direction={"column"} style={{ zIndex: 2 }} gap={"1rem"}>
                        <Text weight={"bold"} style={{ fontSize: "1.5rem" }} mt={"1.5rem"}>
                            Đà Nẵng “mạnh tay” đầu tư cải thiện môi trường nước
                        </Text>
                        <Text style={{ fontSize: "0.8rem" }}>
                            Trong đề án “Xây dựng Đà Nẵng – Thành phố môi trường” giai đoạn 2021-2030, TP. Đà Nẵng đặt mục tiêu tiếp tục duy trì, giữ vững và nâng cao các mục tiêu
                            xây dựng...
                        </Text>
                        <Flex>
                            <Button style={{ background: "white", color: "black" }} onClick={() => (window.location.href = "/news")}>
                                Xem thêm
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    direction={"column"}
                    style={{
                        height: "auto",
                        width: "21vw",
                        position: "relative", // Quan trọng để đặt overlay
                        backgroundImage: `url(${image3})`, // Thay '#' bằng URL hình ảnh nền nếu có
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "10px",
                        color: "white",
                        padding: "2rem",
                        overflow: "hidden", // Đảm bảo không có phần dư thừa
                    }}
                >
                    {/* Lớp phủ mờ */}
                    <Box
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.3)", // Màu đen mờ
                            zIndex: 1, // Đặt lớp phủ dưới nội dung
                        }}
                    />

                    <Flex direction={"column"} style={{ zIndex: 2 }} gap={"1rem"}>
                        <Text weight={"bold"} style={{ fontSize: "1.5rem" }} mt={"1.5rem"}>
                            Quyết tâm xây dựng "Thành phố môi trường"
                        </Text>
                        <Text style={{ fontSize: "0.8rem" }}>
                            Sau 25 năm trở thành thành phố trực thuộc Trung ương (1997-2022), cùng với xây dựng, phát triển mở rộng không gian đô thị, chăm lo đời sống nhân dân,
                            thành phố.
                        </Text>
                        <Flex>
                            <Button style={{ background: "white", color: "black" }} onClick={() => (window.location.href = "/news")}>
                                Xem thêm
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
