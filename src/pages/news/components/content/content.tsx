import { Box, Flex, Text } from "@radix-ui/themes";
import DemoPic from "./images/DragonBridge.png";
import { ContentProps } from "./type";
import { useResponsive } from "@services/responsive";

export const Content = ({ ...props }: ContentProps) => {
    const responsive = useResponsive({
        initial: {
            titleSize: "2",
            descriptionSize: "1",
        },
        md: {
            titleSize: "4",
            descriptionSize: "4",
        },
    });

    return (
        <>
            <Flex align="center" style={{ margin: "1vh 10vw" }}>
                <img src={DemoPic} alt="Demo" style={{ borderRadius: "10px", height: "80vh", width: "20vw", position: "absolute", top: "15vh" }} />

                <Flex direction="column">
                    {contentItems.map((item, index) => (
                        <Flex overflow="hidden" style={{ marginLeft: "10vw", marginTop: "5vh", cursor: "pointer", zIndex: 1 }} onClick={() => window.open(item.link, "_blank")}>
                            <Flex
                                overflow="hidden"
                                align="center"
                                justify="center"
                                p="3"
                                style={{
                                    height: "auto",
                                    width: "240px",
                                    background: "white",
                                    border: "2px solid var(--green-7)",
                                    borderRadius: "10px",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    color: "var(--green-9)",
                                }}
                            >
                                <Text size={responsive["titleSize"]}>{item.title}</Text>
                            </Flex>
                            <Box
                                style={{
                                    width: "80%",
                                    paddingLeft: "2vw",
                                    paddingRight: "1vw",
                                }}
                            >
                                <Text size={responsive["descriptionSize"]} style={{ textAlign: "justify" }}>
                                    <p style={{ padding: "10px", margin: "0" }}>{item.nonce}</p>
                                </Text>
                            </Box>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </>
    );
};

export const contentItems = [
    {
        title: "Năm 2022, Đà Nẵng phân loại được hơn 1.700 tấn rác tài nguyên",
        nonce: "Trong năm 2022, Đà Nẵng có hơn 1.717 tấn rác tài nguyên được thu gom, tái chế, thu được tổng số tiền trên 4 tỉ đồng. Bước đầu, nhận thức về việc phân loại rác thải tại nguồn dần hình thành trong cộng đồng dân cư với nhiều mô hình tái chế, phân loại rác được ra đời.",
        link: "https://laodong.vn/moi-truong/nam-2022-da-nang-phan-loai-duoc-hon-1700-tan-rac-tai-nguyen-1132204.ldo",
    },
    {
        title: "Phân loại rác tại nguồn ở Đà Nẵng: Nhận diện những tồn tại, hạn chế",
        nonce: "(TN&MT) - Phân loại rác tại nguồn, hướng tới phát triển xanh là chủ trương lớn trong tiến trình xây dựng thành phố môi trường mà Đà Nẵng đã tiên phong triển khai từ rất sớm. Tuy nhiên, việc triển khai phân loại chất thải rắn sinh hoạt tại nguồn ở Đà Nẵng trên thực tế còn nhiều tồn tại, hạn chế.",
        link: "https://baotainguyenmoitruong.vn/phan-loai-rac-tai-nguon-o-da-nang-nhan-dien-nhung-ton-tai-han-che-348471.html",
    },
    {
        title: "Năm 2023, toàn thành phố Đà Nẵng tiến hành phân loại rác",
        nonce: "Ngày 22-9, tại phiên họp thường trực HĐND thành phố thường kỳ, đại diện UBND thành phố Đà Nẵng cho biết trong năm 2021, 100% quận, huyện đã ban hành kế hoạch triển khai phân loại chất thải rắn sinh hoạt tại nguồn trên địa bàn cho giai đoạn 2019 - 2025 và từng năm, trong đó có 7/7 quận, huyện ban hành kế hoạch thực hiện năm 2022.",
        link: "https://tuoitre.vn/nam-2023-toan-tp-da-nang-tien-hanh-phan-loai-rac-20220924145909146.htm",
    },
    {
        title: "Đà Nẵng tiến gần tới mốc phân loại rác tại nguồn toàn thành phố",
        nonce: "Trong năm 2023, thành phố Đà Nẵng đặt mục tiêu có hơn 90% số tổ dân phố triển khai phân loại rác, và 90% số hộ gia đình phân loại rác hiệu quả tại địa bàn khu dân cư. Đồng thời, đối với các cơ sở khác, thành phố đặt mục tiêu hơn 70% cơ sở trong các khu công nghiệp, cụm công nghiệp, hơn 80% cơ sở sản xuất, kinh doanh dịch vụ, du lịch và 100% trường học, cơ sở y tế trên địa bàn thành phố phân loại rác bảo đảm theo phương thức chung của thành phố, hơn 80% chợ, siêu thị, trung tâm thương mại được tuyên truyền, hướng dẫn và thực hiện phân loại.",
        link: "https://tuoitre.vn/da-nang-tien-gan-toi-moc-phan-loai-rac-tai-nguon-toan-thanh-pho-20230515113951425.htm",
    },
];
