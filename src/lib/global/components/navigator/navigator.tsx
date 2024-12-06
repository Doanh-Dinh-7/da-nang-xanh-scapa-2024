import { useApiMe } from "@api/http-request/requests/api-server/hooks/user";
import { Icon } from "@components";
import { Avatar, Button, Container, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { pushErrorNotification } from "@services/notification";
import { useAppDispatch } from "@store";
import { stringifyRequestError } from "@utilities";
import cls from "classnames";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LogoDemo from "../../images/logo/logoDNxanhDemo.jpg";
import styles from "./style.module.scss";
import { NavigatorProps } from "./type";
import { removeAccessToken } from "@services/cookie";
import { removeUser, setUser } from "@services/global-states";
import { Role } from "@api/http-request/requests/api-server/models/user";
import { useResponsive } from "@services/responsive";

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

const excludeNavigator = ["/claim-reward"];

export const Navigator = ({ className, ...props }: NavigatorProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const shouldShowStaticNavbar = useResponsive({ initial: true, md: false });
    console.log({ shouldShowStaticNavbar });

    const [shouldHideNavbar, setShouldHideNavbar] = useState<boolean>(true);

    const isAuthPage = ["/login", "/register"].includes(location.pathname);

    const { mutateAsync, data: user, isPending } = useApiMe();

    useEffect(() => {
        if (isAuthPage) return;

        mutateAsync()
            .then((user) => {
                dispatch(setUser(user));
            })
            .catch((error) => {
                const status = error.response?.status;

                if (status === 401) {
                    dispatch(removeAccessToken());
                    dispatch(removeUser());

                    navigate("/login", {
                        replace: true,
                        state: {
                            redirectUrl: `${location.pathname}${location.search}`,
                        },
                    });
                    return;
                }

                dispatch(
                    pushErrorNotification({
                        message: "Không thể lấy thông tin người dùng",
                        description: stringifyRequestError(error),
                    })
                );
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthPage]);

    // Check not render the navigator case
    if (isAuthPage) return null;
    if (excludeNavigator.includes(location.pathname)) return null;

    const handleLogout = () => {
        dispatch(removeAccessToken());
        dispatch(removeUser());
        navigate("/login", {
            replace: true,
            state: {
                redirectUrl: `${location.pathname}${location.search}`,
            },
        });
    };

    return (
        <Container
            className={cls(styles["container"], shouldShowStaticNavbar && styles["static"], shouldShowStaticNavbar && shouldHideNavbar && styles["hide"], className)}
            {...props}
        >
            {shouldShowStaticNavbar && (
                <IconButton className={styles["menu-button"]} onClick={() => setShouldHideNavbar(!shouldHideNavbar)}>
                    {shouldHideNavbar ? <Icon ri="ri-menu-line" /> : <Icon ri="ri-close-line" />}
                </IconButton>
            )}

            <Flex direction="column" align="stretch" gap="9">
                <Flex direction="column" justify="center" align="stretch" gap="6" wrap="wrap">
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

                    <Flex direction="column">
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
                </Flex>
                <Flex direction="column">
                    <Flex direction="column" ml="4" style={{ fontWeight: "600" }}>
                        {user && [Role.ADMIN, Role.CONTRIBUTOR].includes(user.role) && (
                            <NavLink to="/members" style={{ color: "red", textDecoration: "none" }}>
                                <Text size="2" style={{ cursor: "pointer" }}>
                                    <Icon ri="ri-emotion-happy-line" size="3" style={{ marginRight: "2vw", background: "#FEE4E2", padding: "5px", borderRadius: "5px" }} />
                                    Cộng tác viên
                                </Text>
                            </NavLink>
                        )}

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
                    {user && (
                        <Flex direction="column" gap="4">
                            <Flex align="center" gap="4">
                                <Avatar fallback={user.firstName[0]} radius="full" />
                                <Text color="gray" weight="bold">
                                    Xin chào, <span style={{ color: "green", fontWeight: "600" }}>{user.firstName}</span>!
                                </Text>
                            </Flex>
                            <Button variant="soft" onClick={handleLogout}>
                                Đăng xuất
                            </Button>
                        </Flex>
                    )}

                    {!isPending && !user && (
                        <Flex direction="column">
                            <NavLink to="/login">
                                <Button>Đăng nhập ngay!</Button>
                            </NavLink>
                            <Text color="gray" mt="3">
                                Cộng đồng đã tích <span style={{ color: "green", fontWeight: "600" }}>120k điểm xanh</span>. <br /> Còn bạn thì sao?
                            </Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Container>
    );
};
