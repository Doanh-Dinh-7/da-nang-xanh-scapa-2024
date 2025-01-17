import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { HeroProps } from "./type";
import BGImage from "./images/BG-Image.png";

export const Hero = ({ ...props }: HeroProps) => {
    return (
        <Flex
            id="hero"
            direction={"column"}
            style={{
                height: "50vh",
                position: "relative", // Quan trọng để đặt overlay
                backgroundImage: `url(${BGImage})`, // Thay '#' bằng URL hình ảnh nền nếu có
                backgroundSize: "cover",
                backgroundPosition: "center",
                // tạo hiệu ứng bóng đen đè lên h
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
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu đen mờ
                    zIndex: 1, // Đặt lớp phủ dưới nội dung
                }}
            />
            <Flex direction={"column"} style={{ zIndex: 2, justifyContent: "space-between", height: "100%" }}>
                <Flex direction={"column"} gap={"1rem"} width={"20vw"} ml={"4rem"} mt={"2rem"}>
                    <Heading style={{ color: "#32D583" }}>Đà Nẵng Xanh</Heading>
                    <Heading style={{ fontSize: "1.5rem" }}>Giải pháp mới trong quản lý rác thải đô thị</Heading>
                    <Flex>
                        <Button onClick={() => (window.location.href = "/home")}>Chúng tôi đã làm gì</Button>
                    </Flex>
                </Flex>

                <Flex justify={"center"}>
                    <Flex width={"50vw"}>
                        {/* Thống kê 1 */}
                        <Flex style={{ textAlign: "center" }} wrap={"wrap"}>
                            <Text size={"3"}>3,800 thùng rác phân loại</Text>
                        </Flex>
                        {/* Tạo 1 đường line  */}
                        <hr style={{ width: "50vw", borderTop: "2px solid", borderBottom: "none", borderLeft: "none", borderRight: "none" }} />
                        {/* Thống kê 2 */}
                        <Flex style={{ textAlign: "center" }} wrap={"wrap"}>
                            <Text size={"3"}>5,840 đã quyên góp</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
