import { Button, Flex, Heading, Link } from "@radix-ui/themes";
import { HeadProps } from "./type";

export const Head = ({ ...props }: HeadProps) => {
    return (
        <Flex
            style={{
                background: "white",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                justifyContent: "space-between",
                alignItems: "center",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            <Heading
                style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#16a34a",
                }}
            >
                Đà Nẵng Xanh
            </Heading>
            <Flex gap="4">
                <Link
                    href="#hero"
                    style={{
                        color: "#4b5563",
                        textDecoration: "none",
                        transition: "color 0.2s",
                    }}
                >
                    Trang chủ
                </Link>
                <Link
                    href="#about"
                    style={{
                        color: "#4b5563",
                        textDecoration: "none",
                        transition: "color 0.2s",
                    }}
                >
                    Về chúng tôi
                </Link>
                <Link
                    href="#target"
                    style={{
                        color: "#4b5563",
                        textDecoration: "none",
                        transition: "color 0.2s",
                    }}
                >
                    Mục tiêu
                </Link>
                <Link
                    href="#community"
                    style={{
                        color: "#4b5563",
                        textDecoration: "none",
                        transition: "color 0.2s",
                    }}
                >
                    Hoạt động
                </Link>
                <Link
                    href="#develop"
                    style={{
                        color: "#4b5563",
                        textDecoration: "none",
                        transition: "color 0.2s",
                    }}
                >
                    Đội ngũ phát triển
                </Link>
            </Flex>
            <Button
                style={{
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    border: "none",
                }}
                onClick={() => (window.location.href = "/home")}
            >
                Khám phá
            </Button>
        </Flex>
    );
};
