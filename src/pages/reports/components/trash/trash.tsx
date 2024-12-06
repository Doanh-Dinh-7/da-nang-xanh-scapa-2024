import { Box, Button, Dialog, Flex, Text, TextArea } from "@radix-ui/themes";
import { TrashProps } from "./type";

import { Icon } from "@components";

export const Trash = ({ ...props }: TrashProps) => {
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
                        <Icon ri="ri-delete-bin-7-line" color="green" style={{ fontSize: "15vh" }} />
                        <Flex direction="column" justify="center">
                            <Text size="6" weight="bold">
                                Báo lỗi & Cải thiện thùng rác thông minh
                            </Text>
                            <Text mt="5">
                                <i>
                                    Hãy chung tay nâng cấp thùng rác thông minh để xây dựng một thành phố xanh, sạch, đẹp! Mỗi người dân hãy trở thành những tuyên truyền viên tích
                                    cực, khuyến khích mọi người sử dụng thùng rác đúng cách và báo cáo các hư hỏng kịp thời.
                                </i>
                            </Text>
                        </Flex>
                    </Flex>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="750px">
                    <Dialog.Title>Báo lỗi & Cải thiện thùng rác thông minh</Dialog.Title>

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
                                        <option value="1">Cảm biến không hoạt động chính xác</option>
                                        <option value="2">Cơ chế đóng mở nắp kêu to</option>
                                        <option value="3">Nắp đóng quá nhanh hoặc quá chậm</option>
                                        <option value="4">Báo đầy rác không chính xác</option>
                                        <option value="5">Thùng rác gặp khó khăn khi vận hành trong môi trường ẩm ướt</option>
                                        <option value="6">Không có chế độ thủ công khi cảm biến hỏng</option>
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
