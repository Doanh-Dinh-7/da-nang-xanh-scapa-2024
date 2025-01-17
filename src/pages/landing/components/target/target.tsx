import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { TargetProps } from "./type";
import { Icon } from "@components";
import useImage from "./images/useImage.png";

export const Target = ({ ...props }: TargetProps) => {
    return (
        <Flex
            id="target"
            style={{
                padding: "4rem 2rem",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
            }}
        >
            {/* Phần nội dung bên trái */}
            <Flex direction={"column"} style={{ flex: 1, maxWidth: "52%" }}>
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
                    <hr style={{ width: "2vw", borderTop: "2px solid", borderBottom: "none", borderLeft: "none", borderRight: "none", display: "inline-block", margin: 5 }} /> Mục
                    tiêu
                </Text>
                <Heading
                    style={{
                        color: "#333",
                        fontSize: "2rem",
                        marginBottom: "1rem",
                        lineHeight: "1.4",
                    }}
                >
                    Mô hình <span style={{ color: "#27ae60" }}>"Đà Nẵng Xanh"</span> nhằm mục đích:
                </Heading>
                <Flex direction={"column"} style={{ borderLeft: "2px solid #ccc", paddingLeft: "1rem" }} gap={"1rem"}>
                    <Flex direction={"column"} gap={"1vh"}>
                        <Flex align={"center"}>
                            <Icon
                                ri="ri-building-line"
                                style={{ fontSize: "1rem", background: "#83D187", color: "#DDFFDF", padding: "0.5vh 0.5vw", borderRadius: "0.2rem" }}
                            ></Icon>
                            <Text size={"4"} weight={"bold"} style={{ color: "#555", marginLeft: "1rem" }}>
                                Thay đổi hành vi phân loại rác của người dân
                            </Text>
                        </Flex>
                        <Text ml={"1.5rem"}>Mô hình hướng đến việc giúp người dân thay đổi thói quen vứt rác bừa bãi, từ việc bị nhắc nhở đến tự ý thức và hành động đúng.</Text>
                    </Flex>
                    <Flex direction={"column"} gap={"1vh"}>
                        <Flex align={"center"}>
                            <Icon ri="ri-plant-line" style={{ fontSize: "1rem", background: "#83D187", color: "#DDFFDF", padding: "0.5vh 0.5vw", borderRadius: "0.2rem" }}></Icon>
                            <Text size={"4"} weight={"bold"} style={{ color: "#555", marginLeft: "1rem" }}>
                                Phân tích tác động xã hội
                            </Text>
                        </Flex>
                        <Text ml={"1.5rem"}>Nghiên cứu cách thức cộng đồng tham gia vào việc quản lý rác thải, những thay đổi trong hành vi tiêu dùng và bảo vệ môi trường.</Text>
                    </Flex>
                    <Flex direction={"column"} gap={"1vh"}>
                        <Flex align={"center"}>
                            <Icon ri="ri-p2p-line" style={{ fontSize: "1rem", background: "#83D187", color: "#DDFFDF", padding: "0.5vh 0.5vw", borderRadius: "0.2rem" }}></Icon>
                            <Text size={"4"} weight={"bold"} style={{ color: "#555", marginLeft: "1rem" }}>
                                Tạo động lực tham gia cộng đồng
                            </Text>
                        </Flex>
                        <Text ml={"1.5rem"}>Kêu gọi sự tham gia của cộng đồng vào việc quản lý và bảo vệ môi trường.</Text>
                    </Flex>
                    <Flex direction={"column"} gap={"1vh"}>
                        <Flex align={"center"}>
                            <Icon
                                ri="ri-expand-diagonal-2-line"
                                style={{ fontSize: "1rem", background: "#83D187", color: "#DDFFDF", padding: "0.5vh 0.5vw", borderRadius: "0.2rem" }}
                            ></Icon>
                            <Text size={"4"} weight={"bold"} style={{ color: "#555", marginLeft: "1rem" }}>
                                Đánh giá tiềm năng mở rộng mô hình
                            </Text>
                        </Flex>
                        <Text ml={"1.5rem"}>Xác định các yếu tố có thể nhân rộng và phát triển mô hình sang các khu vực khác ngoài Đà Nẵng.</Text>
                    </Flex>
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
                    src={useImage}
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
