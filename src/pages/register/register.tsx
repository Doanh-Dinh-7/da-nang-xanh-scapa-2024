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
import { setAccessToken } from "@services/cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RegisterFormInput, RegisterPageProps } from "./type";
import { useApiRegister } from "@api/http-request/requests/api-server/hooks/user";

export const RegisterPage = ({}: RegisterPageProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();

    const { accessToken } = useAppSelector((state) => state.cookie);

    const { register, handleSubmit } = useForm<RegisterFormInput>();

    const { mutateAsync, isPending } = useApiRegister();

    useEffect(() => {
        if (accessToken) {
            const redirectUrl = state?.redirectUrl || "/";
            navigate(redirectUrl, {
                replace: true,
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);

    const handleSendMessageSuccess: SubmitHandler<RegisterFormInput> = async (data) => {
        try {
            if (data.password !== data.retypePassword) {
                dispatch(
                    pushErrorNotification({
                        message: "Không thể đăng ký",
                        description: "Mật khẩu không trùng khớp",
                    })
                );
                return;
            }

            const RegisterResponse = await mutateAsync({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
            });

            dispatch(setAccessToken(RegisterResponse.accessToken));
        } catch (error: any) {
            dispatch(
                pushErrorNotification({
                    message: "Không thể đăng ký",
                    description: stringifyRequestError(error),
                })
            );
        }
    };

    const handleSendMessageError: SubmitErrorHandler<RegisterFormInput> = (error) => {
        dispatch(
            pushErrorNotification({
                message: "Không thể đăng ký",
                description: stringifyFormError(error),
            })
        );
    };

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
                            Đăng ký
                        </Heading>

                        <form onSubmit={handleSubmit(handleSendMessageSuccess, handleSendMessageError)}>
                            <Flex className="abc" direction="column" gap="3">
                                <div className="xyz" style={{ color: "#667085", padding: "1.2vh 1vw", border: "1px solid #667085", borderRadius: "5px" }}>
                                    <Icon ri="ri-text" style={{ marginRight: "1vw" }} />
                                    <input
                                        placeholder="Tên"
                                        style={{ border: "none", outline: "none" }}
                                        {...register("firstName", {
                                            validate: {
                                                required: (value) => value.trim().length > 0 || "Vui lòng nhập tên",
                                            },
                                        })}
                                    />
                                </div>
                                <div className="xyz" style={{ color: "#667085", padding: "1.2vh 1vw", border: "1px solid #667085", borderRadius: "5px" }}>
                                    <Icon ri="ri-text" style={{ marginRight: "1vw" }} />
                                    <input
                                        placeholder="Họ"
                                        style={{ border: "none", outline: "none" }}
                                        {...register("lastName", {
                                            validate: {
                                                required: (value) => value.trim().length > 0 || "Vui lòng nhập họ",
                                            },
                                        })}
                                    />
                                </div>
                                <div className="xyz" style={{ color: "#667085", padding: "1.2vh 1vw", border: "1px solid #667085", borderRadius: "5px" }}>
                                    <Icon ri="ri-mail-line" style={{ marginRight: "1vw" }} />
                                    <input
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
                                <div style={{ color: "#667085", padding: "1.2vh 1vw", border: "1px solid #667085", borderRadius: "5px" }}>
                                    <Icon ri="ri-key-2-line" style={{ marginRight: "1vw" }} />
                                    <input
                                        type={showPassword ? "password" : "text"}
                                        placeholder="Nhập lại mật khẩu"
                                        style={{ border: "none", outline: "none" }}
                                        {...register("retypePassword", {
                                            validate: {
                                                required: (value) => value.trim().length > 0 || "Vui lòng nhập lại mật khẩu",
                                            },
                                        })}
                                    />
                                    <Icon ri={showPassword ? "ri-eye-off-line" : "ri-eye-line"} onClick={togglePasswordVisibility} />
                                </div>
                                <Button type="submit" mt="3" style={{ width: "100%", cursor: "pointer" }} loading={isPending}>
                                    Đăng ký ngay!
                                </Button>
                            </Flex>
                        </form>
                        <Flex gap="5">
                            <Text style={{ color: "#667085", cursor: "pointer" }}>Đã có tài khoản?</Text>
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <Text color="green" style={{ cursor: "pointer" }}>
                                    Đăng nhập ngay!
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
export default RegisterPage;
