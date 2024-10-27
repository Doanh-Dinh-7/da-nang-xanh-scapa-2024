import { Button, Flex, Text } from "@radix-ui/themes";
import { BottomProps } from "./type";
import inorganicTrash from "./images/trash/inorganicTrash.png";
import organicTrash from "./images/trash/organicTrash.png";
import recycledTrash from "./images/trash/recycledTrash.png";
import realTrashDemo from "./images/trash/realTrashDemo.png";
import style from "./style.module.scss";
import { Icon } from "@components";
import { useState } from "react";

export const Bottom = ({ ...props }: BottomProps) => {
    const [index, setIndex] = useState(1);

    const changeIndex = (index: number) => {
        setIndex(index);
    };

    return (
        <Flex direction="column" position="fixed" bottom="2" width="69vw" style={{ margin: "0 80px" }}>
            <Flex justify="between" align="end" gap="5" style={{ marginBottom: "10px" }}>
                <Button style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                    <Icon ri="ri-corner-up-right-line"></Icon> Dẫn đường
                </Button>
                <img alt="ImageDemo" src={realTrashDemo} style={{ border: "5px solid white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }} />
            </Flex>

            <Flex
                direction="column"
                align="stretch"
                gap="3"
                {...props}
                style={{
                    height: "30vh",
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Flex align="stretch" gap="5" style={{ marginLeft: "20px", marginBottom: "-14px" }}>
                    <Flex direction="column" onClick={() => changeIndex(1)} style={{ cursor: "pointer" }}>
                        <Text weight="bold">Tình Trạng</Text>
                        {index === 1 && <div style={{ border: "1.5px solid green", zIndex: "1" }}></div>}
                    </Flex>
                    <Flex direction="column" onClick={() => changeIndex(2)} style={{ cursor: "pointer" }}>
                        <Text weight="bold">Lịch sử thu gom rác</Text>
                        {index === 2 && <div style={{ border: "1.5px solid green", zIndex: "1" }}></div>}
                    </Flex>
                    <Flex direction="column" onClick={() => changeIndex(3)} style={{ cursor: "pointer" }}>
                        <Text weight="bold">Thông tin</Text>
                        {index === 3 && <div style={{ border: "1.5px solid green", zIndex: "1" }}></div>}
                    </Flex>
                </Flex>
                <div style={{ border: "1px solid silver", margin: "0 10px" }}></div>
                <Flex gap="5" style={{ padding: "10px", justifyContent: "space-around" }}>
                    <Flex direction="column">
                        <Flex>
                            <img width="60px" height="60px" alt="Rác tái chế" src={recycledTrash} />
                            <Flex direction="column" align="stretch" justify="center" style={{ marginLeft: "10px" }}>
                                <Text size="3" style={{ fontWeight: "700" }}>
                                    Rác tái chế
                                </Text>
                                <Text size="2" color="green" style={{ fontWeight: "500" }}>
                                    Đang chứa 30% rác
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex direction="column" style={{ marginTop: "10px" }}>
                            <div>
                                <Icon ri="ri-funds-line" size="1" color="green" style={{ marginRight: "5px" }} />
                                <Text size="1" style={{ fontWeight: "600" }}>
                                    Đã dọn: 1 tiếng trước
                                </Text>
                            </div>
                            <div>
                                <Icon ri="ri-funds-line" size="1" color="green" style={{ marginRight: "5px" }} />
                                <Text size="1" style={{ fontWeight: "600" }}>
                                    Thêm rác: 38 phút trước
                                </Text>
                            </div>
                        </Flex>
                    </Flex>
                    <Flex direction="column">
                        <Flex>
                            <img width="60px" height="60px" alt="Rác hữu cơ" src={organicTrash} />
                            <Flex direction="column" align="stretch" justify="center" style={{ marginLeft: "10px" }}>
                                <Text size="3" style={{ fontWeight: "700" }}>
                                    Rác hữu cơ
                                </Text>
                                <Text size="2" color="green" style={{ fontWeight: "500" }}>
                                    Đang chứa 30% rác
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex direction="column" style={{ marginTop: "10px" }}>
                            <div>
                                <Icon ri="ri-funds-line" size="1" color="green" style={{ marginRight: "5px" }} />
                                <Text size="1" style={{ fontWeight: "600" }}>
                                    Đã dọn: 1 tiếng trước
                                </Text>
                            </div>
                            <div>
                                <Icon ri="ri-funds-line" size="1" color="green" style={{ marginRight: "5px" }} />
                                <Text size="1" style={{ fontWeight: "600" }}>
                                    Thêm rác: 38 phút trước
                                </Text>
                            </div>
                        </Flex>
                    </Flex>
                    <Flex direction="column">
                        <Flex>
                            <img width="60px" height="60px" alt="Rác vô cơ" src={inorganicTrash} />
                            <Flex direction="column" align="stretch" justify="center" style={{ marginLeft: "10px" }}>
                                <Text size="3" style={{ fontWeight: "700" }}>
                                    Rác vô cơ
                                </Text>
                                <Text size="2" color="green" style={{ fontWeight: "500" }}>
                                    Đang chứa 30% rác
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex direction="column" style={{ marginTop: "10px" }}>
                            <div>
                                <Icon ri="ri-funds-line" size="1" color="green" style={{ marginRight: "5px" }} />
                                <Text size="1" style={{ fontWeight: "600" }}>
                                    Đã dọn: 1 tiếng trước
                                </Text>
                            </div>
                            <div>
                                <Icon ri="ri-funds-line" size="1" color="green" style={{ marginRight: "5px" }} />
                                <Text size="1" style={{ fontWeight: "600" }}>
                                    Thêm rác: 38 phút trước
                                </Text>
                            </div>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
