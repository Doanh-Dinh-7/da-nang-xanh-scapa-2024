import { Seo } from "@global/components";
import { useEffect, useState } from "react";
import { Container, Flex, Heading, Button, Text } from "@radix-ui/themes";
import { LoginPageProps } from "./type";
import styles from "./styles.module.scss";
import Logo from "./images/logo/logoDNxanhDemo.jpg";
import BKDNlogo from "./images/logo/bkdn.png";
import DNlogo from "./images/logo/DoanDN.png";
import BannerImage from "./images/bgDragon.png";
import { Icon } from "@components";
import { NavLink } from "react-router-dom";

// import IconQuestion from "../../images/icons/iconQuestion.png";
// import IconSettings from "../../images/icons/iconSettings.png";

export const LoginPage = ({}: LoginPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    // Trạng thái kiểm tra xem mật khẩu đang được ẩn hay hiển thị
    const [showPassword, setShowPassword] = useState(true);

    // Hàm để chuyển đổi trạng thái hiển thị mật khẩu
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <Flex style={{ width: "100vw", height: "100vh", margin: "0 0 0 -1vw", padding: "0", position: "relative" }}>
            <Flex style={{ width: "50%" }}>
                <Flex justify="center" align="center" position="absolute" style={{ marginLeft: "3vw", marginTop: "3vh" }}>
                    <div style={{ borderRadius: "5px", backgroundColor: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "5px" }}>
                        <div
                            style={{
                                height: "30px",
                                width: "30px",
                                backgroundImage: `url(${Logo})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                    </div>

                    <Heading size="1" style={{ marginLeft: "1vw", color: "white" }}>
                        ĐÀ NẴNG XANH
                    </Heading>
                </Flex>

                <img src={BannerImage} alt="Banner" style={{ width: "100%", height: "auto", display: "block" }} />
            </Flex>
            <Flex align="center" justify="center" style={{ background: "linear-gradient(to right, #f0fff4, #ffffff)", height: "100vh", width: "50%" }}>
                <Flex direction="column" gap="5" align="center" justify="center" style={{ margin: "20vh 7vw", height: "50vh", width: "50vw" }}>
                    <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        gap="3"
                        style={{ borderRadius: "10px", backgroundColor: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "5vh 5vw" }}
                    >
                        <div
                            style={{
                                height: "10vh",
                                width: "5vw",
                                backgroundImage: `url(${Logo})`, // Chèn ảnh MapPng vào đây
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        <Heading size="3" style={{ marginTop: "3vh", marginBottom: "3vh" }}>
                            Đăng nhập
                        </Heading>

                        <form action="#">
                            <Flex className="abc" direction="column" gap="3">
                                <div className="xyz" style={{ color: "#667085", padding: "1.2vh 1vw", border: "1px solid #667085", borderRadius: "5px" }}>
                                    <Icon ri="ri-mail-line" style={{ marginRight: "1vw" }} />
                                    <input type="email" name="email" id="email" placeholder="Email" style={{ border: "none", outline: "none" }} />
                                </div>
                                <div style={{ color: "#667085", padding: "1.2vh 1vw", border: "1px solid #667085", borderRadius: "5px" }}>
                                    <Icon ri="ri-key-2-line" style={{ marginRight: "1vw" }} />
                                    <input
                                        type={showPassword ? "password" : "text"}
                                        name="password"
                                        id="password"
                                        placeholder="Mật khẩu"
                                        style={{ border: "none", outline: "none" }}
                                    />
                                    <Icon ri={showPassword ? "ri-eye-off-line" : "ri-eye-line"} onClick={togglePasswordVisibility} />
                                </div>
                                <NavLink to="/">
                                    <Button mt="3" style={{ width: "100%", cursor: "pointer" }}>
                                        Đăng nhập ngay!
                                    </Button>
                                </NavLink>
                            </Flex>
                        </form>
                        <Flex gap="5">
                            <Text style={{ color: "#667085", cursor: "pointer" }}>Chưa có tài khoản?</Text>
                            <Text color="green" style={{ cursor: "pointer" }}>
                                Đăng ký ngay
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Seo title="Home" />
        </Flex>
    );
};

// Using for lazy loading page
export default LoginPage;
