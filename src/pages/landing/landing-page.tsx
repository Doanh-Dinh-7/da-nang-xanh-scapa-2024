import { Seo } from "@global/components";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { Head } from "./components/head";
import { LandingPageProps } from "./type";
import { Hero } from "./components/hero";
import { About } from "./components";
import { Target } from "./components/target";
import { Community } from "./components/community";
import { Develop } from "./components/develop";

import BGImage from "./pictures/Image.png";
import { Icon } from "@components";
import { Footer } from "./components/footer";

export const LandingPage = ({}: LandingPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    return (
        <>
            <Flex
                position="relative"
                direction="column"
                align="stretch"
                gap="3"
                style={{
                    width: "100%",
                }}
            >
                <Head />
                <Hero />
                <Flex style={{ padding: "0 4rem" }}>
                    <About />
                </Flex>
                <Flex style={{ padding: "0 4rem", backgroundColor: "#EFF7F2" }}>
                    <Target />
                </Flex>
                <Flex style={{ padding: "0 4rem" }}>
                    <Community />
                </Flex>
                <Flex style={{ padding: "0 4rem", backgroundColor: "#EFF7F2" }}>
                    <Develop />
                </Flex>
                <Flex style={{ padding: "0 4rem" }} direction={"column"}>
                    <Flex
                        direction={"column"}
                        width={"100%"}
                        style={{
                            padding: "4rem 2rem",
                            justifyContent: "space-between",
                        }}
                    >
                        <Flex
                            direction={"column"}
                            style={{
                                width: "100%",
                                height: "auto",
                                position: "relative", // Quan trọng để đặt overlay
                                backgroundImage: `url(${BGImage})`, // Thay '#' bằng URL hình ảnh nền nếu có
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                // tạo hiệu ứng bóng đen đè lên h
                                color: "white",
                                overflow: "hidden", // Đảm bảo không có phần dư thừa
                                padding: "4rem 2rem",
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
                            <Flex direction={"column"} align={"center"} justify={"center"} style={{ zIndex: 2, justifyContent: "space-between", height: "100%" }}>
                                <Flex direction={"column"} width={"35vw"} gap={"2rem"}>
                                    <Heading style={{ fontSize: "2rem", textAlign: "center" }}>
                                        Bạn có thể góp phần làm cho môi trường <span style={{ color: "#32D583" }}>xanh</span> hơn!
                                    </Heading>
                                    <Flex justify={"center"} gap={"5vw"}>
                                        <Button onClick={() => (window.location.href = "/home")}>Tham gia</Button>
                                        <Button style={{ color: "black", background: "white" }} onClick={() => (window.location.href = "/home")}>
                                            Liên hệ cộng tác
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>

                    {/* Chiến dịch cộng đồng */}
                    <Flex
                        direction={"column"}
                        style={{
                            padding: "4rem 2rem",
                            justifyContent: "space-between",
                        }}
                        gap={"2rem"}
                    >
                        <Heading style={{ fontSize: "1.5rem" }}>Chiến dịch cộng đồng</Heading>
                        <Flex style={{ justifyContent: "space-around" }}>
                            <Flex
                                gap={"2rem"}
                                align={"center"}
                                justify={"center"}
                                style={{ background: "#BEF3C0", padding: "2rem", borderRadius: "0.5rem", cursor: "pointer" }}
                                width={"45%"}
                                onClick={() => (window.location.href = "/activities")}
                            >
                                <Flex direction={"column"} align={"center"} gap={"1"}>
                                    <Heading>23</Heading>
                                    <Text>TH 12</Text>
                                </Flex>
                                <Flex direction={"column"} gap={"1"}>
                                    <Text style={{ textTransform: "uppercase" }}>
                                        Sự kiện tiếp theo
                                        <hr
                                            style={{
                                                width: "2vw",
                                                borderTop: "2px solid",
                                                borderBottom: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                display: "inline-block",
                                                margin: 5,
                                            }}
                                        />
                                    </Text>
                                    <Text weight={"bold"} size={"5"}>
                                        BẢO VỆ MÔI TRƯỜNG
                                    </Text>
                                </Flex>
                                <Flex style={{ width: "2em", height: "2em", borderRadius: "50%", background: "white" }} align={"center"} justify={"center"}>
                                    <Icon ri="ri-arrow-right-line"></Icon>
                                </Flex>
                            </Flex>
                            <Flex
                                gap={"2rem"}
                                align={"center"}
                                justify={"center"}
                                style={{ background: "#BEF3C0", padding: "2rem", borderRadius: "0.5rem", cursor: "pointer" }}
                                width={"45%"}
                                onClick={() => (window.location.href = "/activities")}
                            >
                                <Flex direction={"column"} align={"center"} gap={"1"}>
                                    <Heading>25</Heading>
                                    <Text>TH 12</Text>
                                </Flex>
                                <Flex direction={"column"} gap={"1"}>
                                    <Text style={{ textTransform: "uppercase" }}>
                                        Sự kiện tiếp theo
                                        <hr
                                            style={{
                                                width: "2vw",
                                                borderTop: "2px solid",
                                                borderBottom: "none",
                                                borderLeft: "none",
                                                borderRight: "none",
                                                display: "inline-block",
                                                margin: 5,
                                            }}
                                        />
                                    </Text>
                                    <Text weight={"bold"} size={"5"}>
                                        GIÁO DỤC
                                    </Text>
                                </Flex>
                                <Flex style={{ width: "2em", height: "2em", borderRadius: "50%", background: "white" }} align={"center"} justify={"center"}>
                                    <Icon ri="ri-arrow-right-line"></Icon>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex style={{ padding: "0 4rem", backgroundColor: "black" }}>
                    <Footer />
                </Flex>
            </Flex>

            <Seo title="Landing" />
        </>
    );
};

// Using for lazy loading page
export default LandingPage;
