import { Box, Flex, Text } from "@radix-ui/themes";
import { DevelopProps } from "./type";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
// import useImage from "./images/useImage.png";

export const Develop = ({ ...props }: DevelopProps) => {
    return (
        <Flex
            id="develop"
            direction={"column"}
            width={"100%"}
            style={{
                padding: "4rem 2rem",
                justifyContent: "space-between",
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
                    }}
                >
                    <hr style={{ width: "2vw", borderTop: "2px solid", borderBottom: "none", borderLeft: "none", borderRight: "none", display: "inline-block", margin: 5 }} /> Đội
                    ngũ phát triển
                </Text>
            </Flex>

            <Flex gap={"1rem"} style={{ flex: 1, justifyContent: "space-around" }} wrap={"wrap"} align={"center"} justify={"center"}>
                <Flex direction={"column"} align={"center"} justify={"center"} gap={"0.5rem"}>
                    <Box
                        style={{
                            width: "17em",
                            height: "17em",
                            backgroundImage: `url(${image1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "50%",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    <Text style={{ color: "#039855", fontSize: "1.2rem", fontWeight: "bold" }}>Đặng Công Quốc Huy</Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Sinh viên <span style={{ color: "#DC6803" }}>Khoa Kiến Trúc</span>
                    </Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Trường Đại học <span style={{ color: "#89123E" }}>Bách Khoa Đà Nẵng</span>
                    </Text>
                </Flex>
                <Flex direction={"column"} align={"center"} justify={"center"} gap={"0.5rem"}>
                    <Box
                        style={{
                            width: "17em",
                            height: "17em",
                            backgroundImage: `url(${image2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "50%",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    <Text style={{ color: "#039855", fontSize: "1.2rem", fontWeight: "bold" }}>Vũ Hoàng Quân</Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Sinh viên <span style={{ color: "#DC6803" }}>Khoa Xây dựng Công trình Thủy</span>
                    </Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Trường Đại học <span style={{ color: "#89123E" }}>Bách Khoa Đà Nẵng</span>
                    </Text>
                </Flex>
                <Flex direction={"column"} align={"center"} justify={"center"} gap={"0.5rem"}>
                    <Box
                        style={{
                            width: "17em",
                            height: "17em",
                            backgroundImage: `url(${image3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "50%",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    <Text style={{ color: "#039855", fontSize: "1.2rem", fontWeight: "bold" }}>Nguyễn Lê Anh Minh</Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Cựu sinh viên <span style={{ color: "#DC6803" }}>Khoa Công nghệ thông tin</span>
                    </Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Trường Đại học <span style={{ color: "#89123E" }}>Bách Khoa Đà Nẵng</span>
                    </Text>
                </Flex>
                <Flex direction={"column"} align={"center"} justify={"center"} gap={"0.5rem"}>
                    <Box
                        style={{
                            width: "17em",
                            height: "17em",
                            backgroundImage: `url(${image4})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "50%",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    <Text style={{ color: "#039855", fontSize: "1.2rem", fontWeight: "bold" }}>Nguyễn Thanh Hà</Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Sinh viên <span style={{ color: "#DC6803" }}>Khoa Thương Mại Điện Tử</span>
                    </Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Trường Đại học <span style={{ color: "#89123E" }}>Kinh tế Đà Nẵng</span>
                    </Text>
                </Flex>
                <Flex direction={"column"} align={"center"} justify={"center"} gap={"0.5rem"}>
                    <Box
                        style={{
                            width: "17em",
                            height: "17em",
                            backgroundImage: `url(${image5})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "50%",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    <Text style={{ color: "#039855", fontSize: "1.2rem", fontWeight: "bold" }}>Đinh Sỹ Quốc Doanh</Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Sinh viên <span style={{ color: "#DC6803" }}>Khoa Thống kê - Tin học</span>
                    </Text>
                    <Text style={{ color: "#525560", fontSize: "1rem" }}>
                        Trường Đại học <span style={{ color: "#89123E" }}>Kinh tế Đà Nẵng</span>
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
