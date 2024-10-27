import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { RankProps } from "./type";
import { useState } from "react";
import style from "./style.module.scss";
import { Icon } from "@components";
import Team1 from "./images/team/Team1.png";
import Team2 from "./images/team/Team2.png";
import Team3 from "./images/team/Team3.png";
import Rank1 from "./images/ranking/rank1.png";
import Rank2 from "./images/ranking/rank2.png";
import Rank3 from "./images/ranking/rank3.png";

export const Rank = ({ ...props }: RankProps) => {
    const [dateTime, setDateTime] = useState(3);

    const changeTime = (index: number) => {
        setDateTime(index);
    };

    return (
        <Flex direction="column" align="stretch" gap="8" p="4" style={{ width: "100%" }} {...props}>
            <Flex align="center" gap="5" style={{ justifyContent: "space-between" }}>
                <Heading size="5">Bảng Xếp Hạng</Heading>
                <Box style={{ border: "1px solid #ccc", borderRadius: "0.5vw", display: "flex", overflow: "hidden" }}>
                    <Button
                        onClick={() => changeTime(1)}
                        style={{
                            background: dateTime === 1 ? "green" : "none",
                            color: dateTime === 1 ? "white" : "black",
                            fontWeight: "600",
                            borderRight: "1px solid #98A2B3",
                            borderRadius: "0.4vw 0 0 0.4vw",
                        }}
                    >
                        Tháng
                    </Button>
                    <Button
                        onClick={() => changeTime(2)}
                        style={{
                            background: dateTime === 2 ? "green" : "none",
                            color: dateTime === 2 ? "white" : "black",
                            fontWeight: "600",
                            borderRight: "1px solid #98A2B3",
                            borderRadius: "0",
                        }}
                    >
                        Tuần
                    </Button>
                    <Button
                        onClick={() => changeTime(3)}
                        style={{ background: dateTime === 3 ? "green" : "none", color: dateTime === 3 ? "white" : "black", borderRadius: "0 0.4vw 0.4vw 0" }}
                    >
                        Hôm nay
                    </Button>
                </Box>
            </Flex>
            <Flex align="center" style={{ justifyContent: "space-between" }}>
                {MemberItems.map((item, index) => (
                    <Flex direction="column" style={{ borderRadius: "1vw", border: "1px solid #98A2B3" }}>
                        <Flex justify="center" align="center" gap="4" style={{ justifyContent: "space-between", borderBottom: "1px solid #98A2B3", padding: "1vw" }}>
                            <Flex align="center" gap="3">
                                <img src={item.image} alt={item.team} />
                                <Flex direction="column" gap="1">
                                    <Text size="2" style={{ fontWeight: "600" }}>
                                        {item.team}
                                    </Text>
                                    <Text size="4" style={{ fontWeight: "600", color: "#039855" }}>
                                        <Icon ri="ri-star-line" style={{ fontWeight: "100", marginRight: "1vw" }} />
                                        {item.point}
                                    </Text>
                                </Flex>
                            </Flex>
                            <img src={item.rank} alt="Rank1" />
                        </Flex>
                        <Flex style={{ fontWeight: "600", width: "100%" }}>
                            <Flex direction="column" style={{ width: "50%", borderRight: "1px solid #98A2B3", padding: "1vw" }}>
                                <Text size="2" style={{ color: "#98A2B3" }}>
                                    THÀNH VIÊN
                                </Text>
                                <Text size="5">{item.member}</Text>
                            </Flex>
                            <Flex direction="column" style={{ width: "50%", padding: "1vw" }}>
                                <Text size="2" style={{ color: "#98A2B3" }}>
                                    CHIẾN DỊCH
                                </Text>
                                <Text size="5">{item.active}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export const MemberItems = [
    {
        team: "Tổ chức Đà Nẵng Xanh",
        image: Team1,
        point: "1,264",
        rank: Rank1,
        member: 317,
        active: 12,
    },
    {
        team: "Nhóm tình nguyện xanh",
        image: Team2,
        point: "1,264",
        rank: Rank2,
        member: 317,
        active: 12,
    },
    {
        team: "Tổ chức Vì Tương Lai",
        image: Team3,
        point: "1,264",
        rank: Rank3,
        member: 317,
        active: 12,
    },
];
