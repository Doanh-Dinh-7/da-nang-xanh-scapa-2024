import { Flex, Text } from "@radix-ui/themes";
import { TrashProps } from "./type";

export const Trash = ({ ...props }: TrashProps) => {
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
                                <Text size="3">Thùng rác</Text>
                            </th>
                            <th style={{ padding: "10px", color: "#333" }}>
                                <Text size="3">Trạng thái</Text>
                            </th>
                            <th style={{ padding: "10px", color: "#333" }}>
                                <Text size="3">Lượng rác</Text>
                            </th>
                            <th style={{ padding: "10px", color: "#333" }}>
                                <Text size="3">Cập nhật</Text>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {TrashItems.map((item, index) => (
                            <tr key={index} style={{ borderTop: "1px solid #777" }}>
                                <td style={{ padding: "10px", fontWeight: "bold" }}>{index + 1}</td>
                                <td style={{ padding: "10px" }}>
                                    <Text weight="bold" style={{ display: "block" }}>
                                        {item.trash}
                                    </Text>
                                    <Text style={{ fontSize: "0.875rem", color: "#777" }}>{item.locate}</Text>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <Text
                                        style={{
                                            padding: "4px 8px",
                                            backgroundColor: item.status ? "#e6ffed" : "#e0f7ff",
                                            color: item.status ? "#28a745" : "#007bff",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        {item.status ? "HOẠT ĐỘNG" : "NGHỈ NGƠI"}
                                    </Text>
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <Text style={{ color: "#28a745", marginRight: "1vw" }}>{item.amountRecycled}</Text>
                                    <Text style={{ color: "#ff9800", marginRight: "1vw" }}>{item.amountOrganic}</Text>
                                    <Text style={{ color: "#f44336", marginRight: "1vw" }}>{item.amountInorganic}</Text>
                                </td>
                                <td style={{ padding: "10px", color: "#777" }}>{item.update}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Flex>
        </>
    );
};

export const TrashItems = [
    {
        trash: "DN-SMT01",
        locate: "Công viên thanh niên",
        status: 1,
        amountRecycled: "58%",
        amountOrganic: "42%",
        amountInorganic: "30%",
        update: "10 giây trước",
    },
    {
        trash: "DN-SMT01",
        locate: "Công viên thanh niên",
        status: 0,
        amountRecycled: "58%",
        amountOrganic: "42%",
        amountInorganic: "30%",
        update: "10 giây trước",
    },
    {
        trash: "DN-SMT01",
        locate: "Công viên thanh niên",
        status: 0,
        amountRecycled: "58%",
        amountOrganic: "42%",
        amountInorganic: "30%",
        update: "10 giây trước",
    },
    {
        trash: "DN-SMT01",
        locate: "Công viên thanh niên",
        status: 1,
        amountRecycled: "58%",
        amountOrganic: "42%",
        amountInorganic: "30%",
        update: "10 giây trước",
    },
];
