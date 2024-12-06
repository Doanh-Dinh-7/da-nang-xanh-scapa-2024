import { useApiLogin } from "@api/http-request/requests/api-server/hooks/user";
import { Icon } from "@components";
import { Seo } from "@global/components";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { pushErrorNotification } from "@services/notification";
import { useAppDispatch, useAppSelector } from "@store";
import { stringifyFormError, stringifyRequestError } from "@utilities";
import { useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import BannerImage from "./images/bgDragon.png";
import Logo from "./images/logo/logoDNxanhDemo.jpg";
import { LoginFormInput, LoginPageProps } from "./type";
import { setAccessToken } from "@services/cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useResponsive } from "@services/responsive";

// import IconQuestion from "../../images/icons/iconQuestion.png";
// import IconSettings from "../../images/icons/iconSettings.png";

export const LoginPage = ({}: LoginPageProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();

    const { accessToken } = useAppSelector((state) => state.cookie);

    const { register, handleSubmit } = useForm<LoginFormInput>();

    const { mutateAsync, isPending } = useApiLogin();

    useEffect(() => {
        if (accessToken) {
            const redirectUrl = state?.redirectUrl || "/";
            navigate(redirectUrl, {
                replace: true,
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);

    const handleSendMessageSuccess: SubmitHandler<LoginFormInput> = async (data) => {
        try {
            const loginResponse = await mutateAsync({
                email: data.email,
                password: data.password,
            });

            dispatch(setAccessToken(loginResponse.accessToken));
        } catch (error: any) {
            dispatch(
                pushErrorNotification({
                    message: "Không thể đăng nhập",
                    description: stringifyRequestError(error),
                })
            );
        }
    };

    const handleSendMessageError: SubmitErrorHandler<LoginFormInput> = (error) => {
        dispatch(
            pushErrorNotification({
                message: "Không thể đăng nhập",
                description: stringifyFormError(error),
            })
        );
    };

    const responsive = useResponsive({
        initial: {
            shouldShowImage: false,
            containerDirection: "column",
            width: "100%",
            formWidth: "100vw",
            formMargin: "20vh 0",
        },
        md: {
            shouldShowImage: true,
            containerDirection: "row",
            width: "50%",
            formWidth: "50vw",
            formMargin: "20vh 7vw",
        },
    });

    // Trạng thái kiểm tra xem mật khẩu đang được ẩn hay hiển thị
    const [showPassword, setShowPassword] = useState(true);

    // Hàm để chuyển đổi trạng thái hiển thị mật khẩu
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <Flex direction={responsive["containerDirection"]} style={{ width: "100vw", height: "100vh", margin: "0 0 0 -1vw", padding: "0", position: "relative" }}>
            <Flex style={{ width: responsive["containerDirection"], display: responsive["shouldShowImage"] ? "flex" : "none" }}>
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
            <Flex align="center" justify="center" style={{ background: "linear-gradient(to right, #f0fff4, #ffffff)", height: "100vh", width: responsive["containerDirection"] }}>
                <Flex direction="column" gap="5" align="center" justify="center" style={{ margin: responsive["formMargin"], height: "50vh", width: responsive["formWidth"] }}>
                    <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        gap="3"
                        style={{ borderRadius: "10px", backgroundColor: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "5vh 5vw" }}
                    >
                        <div
                            style={{
                                width: "4rem",
                                aspectRatio: "1/1",
                                backgroundImage: `url(${Logo})`, // Chèn ảnh MapPng vào đây
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        <Heading size="3" style={{ marginTop: "3vh", marginBottom: "3vh" }}>
                            Đăng nhập
                        </Heading>

                        <form onSubmit={handleSubmit(handleSendMessageSuccess, handleSendMessageError)}>
                            <Flex className="abc" direction="column" gap="3">
                                <div className="xyz" style={{ color: "#667085", padding: "1.2vh 1vw", border: "1px solid #667085", borderRadius: "5px" }}>
                                    <Icon ri="ri-mail-line" style={{ marginRight: "1vw" }} />
                                    <input
                                        id="email"
                                        placeholder="Email"
                                        style={{ border: "none", outline: "none" }}
                                        {...register("email", {
                                            validate: {
                                                required: (value) => value.trim().length > 0 || "Vui lòng nhập email",
                                                email: (value) => /\S+@\S+\.\S+/.test(value) || "Email không hợp lệ",
                                            },
                                        })}
                                    />
                                </div>
                                <div style={{ color: "#667085", padding: "1.2vh 1vw", border: "1px solid #667085", borderRadius: "5px" }}>
                                    <Icon ri="ri-key-2-line" style={{ marginRight: "1vw" }} />
                                    <input
                                        type={showPassword ? "password" : "text"}
                                        id="password"
                                        placeholder="Mật khẩu"
                                        style={{ border: "none", outline: "none" }}
                                        {...register("password", {
                                            validate: {
                                                required: (value) => value.trim().length > 0 || "Vui lòng nhập mật khẩu",
                                            },
                                        })}
                                    />
                                    <Icon ri={showPassword ? "ri-eye-off-line" : "ri-eye-line"} onClick={togglePasswordVisibility} />
                                </div>
                                <Button type="submit" mt="3" style={{ width: "100%", cursor: "pointer" }} loading={isPending}>
                                    Đăng nhập ngay!
                                </Button>
                            </Flex>
                        </form>
                        <Flex gap="5">
                            <Text style={{ color: "#667085", cursor: "pointer" }}>Chưa có tài khoản?</Text>
                            <Link to="/register" style={{ textDecoration: "none" }}>
                                <Text color="green" style={{ cursor: "pointer" }}>
                                    Đăng ký ngay
                                </Text>
                            </Link>
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
