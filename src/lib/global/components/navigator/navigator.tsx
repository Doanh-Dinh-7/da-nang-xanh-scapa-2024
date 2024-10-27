import { Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import cls from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { NavigatorProps } from "./type";
import Logo from "../../images/logo/logoDNxanh.png";
import LogoDemo from "../../images/logo/logoDNxanhDemo.jpg";
import styles from "./style.module.scss";
import { Icon } from "@components";

const navigationItems = [
    {
        title: "Thùng rác thông minh",
        icon: "ri-home-line",
        to: "/",
    },
    {
        title: "Tình trạng môi trường",
        icon: "ri-bar-chart-fill",
        to: "/analysis",
    },
    {
        title: "Cập nhật tin tức",
        icon: "ri-checkbox-line",
        to: "/news",
    },
    {
        title: "Tích điểm đổi quà",
        icon: "ri-gift-line",
        to: "/points",
    },
    {
        title: "Hoạt động cộng đồng",
        icon: "ri-service-line",
        to: "/activities",
    },
    {
        title: "Báo cáo sai vi phạm",
        icon: "ri-flag-line",
        to: "/reports",
    },
    {
        title: "Về chúng tôi",
        icon: "ri-group-line",
        to: "/info",
    },
];

export const Navigator = ({ className, ...props }: NavigatorProps) => {
    const location = useLocation();

    // Kiểm tra nếu URL là /login thì không hiển thị Navigator
    if (location.pathname === "/login") return null;

    return (
        <Container className={cls(styles["container"], className)} {...props}>
            <Flex direction="column" align="stretch" gap="9">
                <Flex direction="column" justify="center" align="stretch" gap="1" wrap="wrap">
                    <Flex justify="center" align="center">
                        <div style={{ borderRadius: "5px", backgroundColor: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "2px" }}>
                            <div
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    backgroundImage: `url(${LogoDemo})`, // Chèn ảnh MapPng vào đây
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </div>

                        <Heading size="1" style={{ marginLeft: "1vw" }}>
                            ĐÀ NẴNG XANH
                        </Heading>
                    </Flex>
                    {navigationItems.map(({ title, icon, to }) => (
                        <NavLink key={title} to={to} className={styles["nav-link"]}>
                            {({ isActive }) => (
                                <Flex justify="start" align="center" className={cls(styles["text"], isActive && styles["active"])}>
                                    <Icon ri={icon} className={cls(styles["icon"], isActive && styles["active"])} />
                                    {title}
                                </Flex>
                            )}
                        </NavLink>
                    ))}
                </Flex>
                <Flex direction="column">
                    <Flex direction="column" ml="4" style={{ fontWeight: "600" }}>
                        <NavLink to="/members" style={{ color: "red", textDecoration: "none" }}>
                            <Text size="2" style={{ cursor: "pointer" }}>
                                <Icon ri="ri-emotion-happy-line" size="3" style={{ marginRight: "2vw", background: "#FEE4E2", padding: "5px", borderRadius: "5px" }} />
                                Cộng tác viên
                            </Text>
                        </NavLink>
                        <Text size="2" style={{ cursor: "pointer" }}>
                            <Icon ri="ri-lifebuoy-line" size="3" style={{ marginRight: "2vw", padding: "5px" }} />
                            Trợ giúp
                        </Text>
                        <Text size="2" style={{ cursor: "pointer" }}>
                            <Icon ri="ri-settings-2-line" size="3" style={{ marginRight: "2vw", padding: "5px" }} />
                            Cài đặt
                        </Text>
                    </Flex>
                    <div style={{ border: "1px solid gray", margin: "2vh 0" }}></div>
                    <Flex direction="column">
                        <NavLink to="/login">
                            <Button>Đăng nhập ngay!</Button>
                        </NavLink>
                        <Text color="gray" mt="3">
                            Cộng đồng đã tích <span style={{ color: "green", fontWeight: "600" }}>120k điểm xanh</span>. <br /> Còn bạn thì sao?
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
};
