import { Button, Dialog, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { WasteProps } from "./type";

import { Icon } from "@components";

export const Waste = ({ ...props }: WasteProps) => {
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
                        <Icon ri="ri-recycle-line" color="red" style={{ fontSize: "15vh" }} />
                        <Flex direction="column" justify="center">
                            <Text size="6" weight="bold">
                                Báo cáo bãi rác tự phát
                            </Text>
                            <Text mt="5">
                                <i>
                                    Bãi rác tự phát như những 'vết nhơ' xấu xí trên gương mặt thành phố. Hãy cùng nhau 'lau sạch' chúng để thành phố luôn tươi tắn, rạng ngời. Mỗi
                                    cuộc gọi báo cáo của bạn chính là một giọt nước nhỏ góp vào dòng sông làm sạch môi trường.
                                </i>
                            </Text>
                        </Flex>
                    </Flex>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="750px">
                    <Dialog.Title>Báo cáo bãi rác tự phát</Dialog.Title>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Địa điểm
                            </Text>
                            <TextField.Root placeholder="Nhập địa điểm" />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Thời gian
                            </Text>
                            <TextField.Root type="datetime-local" />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Nội dung
                            </Text>
                            <TextArea placeholder="Nội dung" />
                        </label>
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
