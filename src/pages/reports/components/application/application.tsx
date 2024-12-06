import { Box, Button, Dialog, Flex, Text, TextArea } from "@radix-ui/themes";
import { ApplicationProps } from "./type";

import { Icon } from "@components";

export const Application = ({ ...props }: ApplicationProps) => {
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Flex
                        align="stretch"
                        justify="center"
                        gap="8"
                        p="3"
                        style={{ background: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer" }}
                        {...props}
                    >
                        <Icon ri="ri-terminal-window-fill" style={{ fontSize: "15vh" }} />
                        <Flex direction="column" justify="center">
                            <Text size="6" weight="bold">
                                Báo lỗi & Cải thiện ứng dụng
                            </Text>
                            <Text mt="5">
                                <i>
                                    Ứng dụng ĐÀ NẴNG XANH luôn lắng nghe ý kiến của bạn. Hãy chia sẻ những trải nghiệm của mình để chúng tôi có thể cải thiện và phát triển ứng dụng
                                    một cách hiệu quả."Mỗi báo cáo của bạn là một đóng góp quan trọng để ứng dụng ĐÀ NẴNG XANH trở nên hoàn hảo hơn.
                                </i>
                            </Text>
                        </Flex>
                    </Flex>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="750px">
                    <Dialog.Title>Báo lỗi & Cải thiện ứng dụng</Dialog.Title>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Thông tin lỗi cần đề xuất cải thiện
                            </Text>
                            <TextArea placeholder="Nội dung" />
                        </label>

                        <Flex asChild direction="column">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Loại lỗi
                                </Text>
                                <Box asChild px="2" py="1" style={{ border: "1px solid var(--gray-7)", borderRadius: "var(--radius-2)" }}>
                                    <select>
                                        <option value="1">Tốc độ xử lý chậm</option>
                                        <option value="2">Bảo mật chưa đủ mạnh</option>
                                        <option value="3">Giao diện người dùng khó sử dụng</option>
                                        <option value="4">Thiếu khả năng tích hợp với hệ thống khác</option>
                                        <option value="5">Thiếu cơ chế sao lưu và phục hồi</option>
                                        <option value="6">Khả năng phân quyền và quản lý quyền truy cập kém</option>
                                        <option value="7">Khác</option>
                                    </select>
                                </Box>
                            </label>
                        </Flex>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Hình ảnh minh chứng
                            </Text>
                            <input type="file" alt="Ảnh minh chứng" />
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Huỷ
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button>Gửi</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </>
    );
};
