import { Box, Button, Flex, Heading, Link, Text, TextField } from "@radix-ui/themes";
import { FooterProps } from "./type";
import Logo from "./images/Logo.png";
// import useImage from "./images/useImage.png";

export const Footer = ({ ...props }: FooterProps) => {
    return (
        <Flex
            id="footer"
            width={"100%"}
            style={{
                padding: "4rem 2rem",
                justifyContent: "space-between",
            }}
        >
            {/* Phần nội dung bên trái */}
            <Flex align={"center"} width={"40vw"} style={{ justifyContent: "space-around", color: "white" }}>
                <img
                    src={Logo}
                    alt="Đà Nẵng Xanh"
                    style={{
                        height: "10vh",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                />

                <Flex direction="column" gap="1">
                    <Text>Đội ngũ chúng tôi</Text>
                    <Link href="#about" style={{ color: "gray" }}>
                        Về chúng tôi
                    </Link>
                    <Link href="#develop" style={{ color: "gray" }}>
                        Nhóm
                    </Link>
                    <Link href="#target" style={{ color: "gray" }}>
                        Chúng tôi đã làm
                    </Link>
                    <Link href="#footer" style={{ color: "gray" }}>
                        Liên hệ
                    </Link>
                </Flex>
                <Flex direction="column" gap="1">
                    <Text>Nhiều hơn</Text>
                    <Link href="#about" style={{ color: "gray" }}>
                        Dự án
                    </Link>
                    <Link href="#develop" style={{ color: "gray" }}>
                        Sự kiện
                    </Link>
                    <Link href="#target" style={{ color: "gray" }}>
                        Ủng hộ
                    </Link>
                    <Link href="#footer" style={{ color: "gray" }}>
                        Blog
                    </Link>
                </Flex>
            </Flex>

            {/* Phần nội dung bên phải */}
            <Flex direction={"column"} align={"center"} justify={"center"} gap={"2rem"} style={{ color: "white" }} width={"40vw"}>
                <Heading size={"5"}>Đăng ký để nhận thông tin cập nhật mới nhất</Heading>
                <Flex style={{ color: "#667085", padding: "0 0 0 1vw", border: "1px solid #667085", borderRadius: "5px" }} width={"100%"}>
                    <input id="email" placeholder="Email của bạn" style={{ border: "none", outline: "none", background: "none", width: "100%", color: "white" }} />
                    <Button style={{ background: "white", color: "black", padding: "1.2vw 1vh" }}>Đăng ký</Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
