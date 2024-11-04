import { Seo } from "@global/components";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useEffect } from "react";
import AvatarDemo from "./pictures/Avatar.png";
import ImageDemo from "./pictures/DragonBridge.png";
import { InfoPageProps } from "./type";

export const InfoPage = ({}: InfoPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    return (
        <>
            <Flex direction="column" align="stretch" style={{ height: "100vh", background: "linear-gradient(to right, #f0fff4, #ffffff)" }}>
                <Flex gap="5" direction="column" style={{ margin: "20px 80px" }}>
                    <Flex>
                        <Flex style={{ borderRadius: "10px", position: "relative", textAlign: "center" }}>
                            <div
                                style={{ background: `url(${ImageDemo}) center center no-repeat`, backgroundSize: "cover", height: "80vh", width: "25vw", borderRadius: "10px" }}
                            ></div>
                            <div style={{ position: "absolute", backgroundColor: "white", fontSize: "1.6vw", padding: "20px", borderRadius: "10px 0 10px 0", fontWeight: "700" }}>
                                Chúng Tôi Với <br /> Sứ Mệnh Bảo Vệ <br /> <span style={{ color: "green" }}>Môi Trường</span>
                            </div>
                            <Flex direction="column" style={{ position: "absolute", bottom: "20px", right: "20px", color: "white", fontWeight: "700" }}>
                                <Text size="8" style={{}}>
                                    Hơn 5K+
                                </Text>
                                <Text size="2" color="green" style={{ marginLeft: "2vw", padding: "5px", background: "white", borderRadius: "5px" }}>
                                    Thành viên
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex direction="column" ml="5" gap="5">
                            <Flex direction="column" p="5" style={{ background: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                                <Text style={{ fontWeight: "500" }}>
                                    <i>
                                        “Từ khi sử dụng ứng dụng bảo vệ môi trường, tôi thấy việc bảo vệ môi trường trở nên thật dễ dàng và thú vị. Việc phân loại rác, tìm điểm thu
                                        gom tái chế gần nhất hay tham gia các hoạt động bảo vệ môi trường giờ đây chỉ với vài cú chạm. Ứng dụng này thực sự là một trợ thủ đắc lực
                                        cho những ai quan tâm đến môi trường.”
                                    </i>
                                </Text>
                                <Flex align="center" mt="3">
                                    <img src={AvatarDemo} alt="avauser" style={{ borderRadius: "25px" }} />
                                    <Text size="3" weight="bold" style={{ marginLeft: "10px" }}>
                                        Duyên
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex direction="column" p="5" style={{ background: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                                <Text style={{ fontWeight: "500" }}>
                                    <i>
                                        “Tôi rất hài lòng với ứng dụng bảo vệ môi trường này. Giao diện thân thiện, thông tin cập nhật, và các tính năng đa dạng đã giúp tôi có ý
                                        thức hơn về việc bảo vệ môi trường.”
                                    </i>
                                </Text>
                                <Flex align="center" mt="3">
                                    <img src={AvatarDemo} alt="avauser" style={{ borderRadius: "25px" }} />
                                    <Text size="3" weight="bold" style={{ marginLeft: "10px" }}>
                                        Hà
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex direction="column" p="5" style={{ background: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                                <Text style={{ fontWeight: "500" }}>
                                    <i>“Tôi rất ấn tượng với cách ứng dụng này đơn giản hóa những hành động bảo vệ môi trường.”</i>
                                </Text>
                                <Flex align="center" mt="3">
                                    <img src={AvatarDemo} alt="avauser" style={{ borderRadius: "25px" }} />
                                    <Text size="3" weight="bold" style={{ marginLeft: "10px" }}>
                                        Hải Yến
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex align="stretch" justify="between" style={{ padding: "1vh 3vw", background: "#05603A", borderRadius: "10px" }}>
                        <Text size="7" style={{ color: "white" }}>
                            Bạn Đã Sẵn Sàng Bảo Vệ Môi Trường!
                        </Text>
                        <Button style={{ background: "white", color: "#344054", border: "1px solid #D0D5DD" }}>Tham gia ngay!</Button>
                    </Flex>
                </Flex>
            </Flex>

            <Seo title="Info" />
        </>
    );
};

// Using for lazy loading page
export default InfoPage;
