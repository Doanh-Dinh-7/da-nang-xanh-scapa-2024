import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { AboutProps } from "./type";
import ABImage from "./images/minhhoa.png";

export const About = ({ ...props }: AboutProps) => {
    return (
        <Flex
            id="about"
            style={{
                padding: "4rem 2rem",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
            }}
        >
            {/* Phần nội dung bên trái */}
            <Flex direction={"column"} style={{ flex: 1, maxWidth: "50%" }}>
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
                    <hr style={{ width: "2vw", borderTop: "2px solid", borderBottom: "none", borderLeft: "none", borderRight: "none", display: "inline-block", margin: 5 }} /> Về
                    chúng tôi
                </Text>
                <Heading
                    style={{
                        color: "#27ae60",
                        fontSize: "2rem",
                        marginBottom: "1rem",
                        lineHeight: "1.4",
                    }}
                >
                    Đà Nẵng Xanh - <span style={{ color: "#333" }}>Giải pháp mới trong quản lý rác thải đô thị</span>
                </Heading>
                <Text
                    style={{
                        color: "#555",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        marginBottom: "2rem",
                        textAlign: "justify",
                    }}
                >
                    Quản lý rác thải đô thị là một trong những thách thức lớn nhất đối với các thành phố phát triển, đặc biệt là các đô thị có tốc độ tăng trưởng nhanh như Đà Nẵng.
                    Mô hình "Đà Nẵng Xanh" được phát triển như một giải pháp toàn diện, kết hợp giữa công nghệ thông minh và sự tham gia tích cực của cộng đồng.
                </Text>
                <Flex>
                    <Button
                        style={{
                            backgroundColor: "#27ae60",
                            color: "white",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "4px",
                            fontSize: "1rem",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Tìm hiểu thêm
                    </Button>
                </Flex>
            </Flex>

            {/* Phần hình ảnh bên phải */}
            <Box
                style={{
                    flex: 1,
                    maxWidth: "40%",
                }}
            >
                <img
                    src={ABImage}
                    alt="Đà Nẵng Xanh"
                    style={{
                        width: "100%",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                />
            </Box>
        </Flex>
    );
};
