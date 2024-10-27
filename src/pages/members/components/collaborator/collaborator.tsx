import { Flex, Text } from "@radix-ui/themes";
import { CollaboratorProps } from "./type";
import style from "./style.module.scss";
import { Icon } from "@components";
import Avatar from "./images/Avatar.png";

export const Collaborator = ({ ...props }: CollaboratorProps) => {
    return (
        <>
            <Flex align="center" style={{ margin: "1vh 10vw" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th style={{ padding: "10px", color: "#333" }}>
                                <Text size="3">STT</Text>
                            </th>
                            <th style={{ padding: "10px", color: "#333" }}>
                                <Text size="3">Người báo cáo</Text>
                            </th>
                            <th style={{ padding: "10px", color: "#333" }}>
                                <Text size="3">Trạng thái</Text>
                            </th>
                            <th style={{ padding: "10px", color: "#333" }}>
                                <Text size="3">Ngày báo cáo</Text>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {MemberItems.map((item, index) => (
                            <tr key={index} style={{ borderTop: "1px solid #777" }}>
                                <td style={{ padding: "10px", fontWeight: "bold" }}>{index + 1}</td>
                                <td style={{ padding: "10px" }}>
                                    <Flex>
                                        <img src={item.image} alt="memberImage" style={{ borderRadius: "5vw", marginRight: "1vw" }} />
                                        <Flex direction="column">
                                            <Text weight="bold" style={{ display: "block" }}>
                                                {item.name}
                                            </Text>
                                            <Text style={{ fontSize: "0.875rem", color: "#777" }}>{item.role}</Text>
                                        </Flex>
                                    </Flex>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <Text
                                        style={{
                                            padding: "4px 8px",
                                            backgroundColor: item.status ? "#e6ffed" : "#ffebee",
                                            color: item.status ? "#28a745" : "#d32f2f",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        {item.status ? "ĐÃ XỬ LÝ" : "CHƯA XỬ LÝ"}
                                    </Text>
                                </td>
                                <td style={{ padding: "10px", color: "#777" }}>{item.report}</td>
                                <td style={{ color: "green", cursor: "pointer" }}>
                                    <Text size="3">
                                        Xem thêm <Icon ri="ri-arrow-right-circle-line" />
                                    </Text>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Flex>
        </>
    );
};

export const MemberItems = [
    {
        name: "HV.Cường",
        role: "Cộng tác viên",
        status: 0,
        report: "5 ngày trước",
        image: Avatar,
    },
    {
        name: "HV.Cường",
        role: "Cộng tác viên",
        status: 0,
        report: "7 ngày trước",
        image: Avatar,
    },
    {
        name: "HV.Cường",
        role: "Cộng tác viên",
        status: 0,
        report: "20/08/2024",
        image: Avatar,
    },
    {
        name: "HV.Cường",
        role: "Cộng tác viên",
        status: 1,
        report: "13/06/2024",
        image: Avatar,
    },
];
