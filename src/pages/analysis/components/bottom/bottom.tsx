import { Flex, Text } from "@radix-ui/themes";
import inorganicTrash from "./images/trash/inorganicTrash.png";
import organicTrash from "./images/trash/organicTrash.png";
import recycledTrash from "./images/trash/recycledTrash.png";
import { BottomProps } from "./type";
import { useResponsive } from "@services/responsive";

export const Bottom = ({ ...props }: BottomProps) => {
    const responsive = useResponsive({
        initial: {
            imageSize: "30px",
            subtextSize: "1",
        },
        md: {
            imageSize: "60px",
            subtextSize: "2",
        },
    });

    return (
        <Flex direction="column" style={{ margin: "10px 0" }}>
            <Flex
                direction="column"
                align="stretch"
                gap="3"
                {...props}
                style={{
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Flex gap="5" style={{ padding: "10px", justifyContent: "space-around" }}>
                    <Flex>
                        <img width={responsive["imageSize"]} height={responsive["imageSize"]} alt="Rác tái chế" src={recycledTrash} />
                        <Flex direction="column" align="stretch" justify="center" style={{ marginLeft: "10px" }}>
                            <Text size="3" color="green" style={{ fontWeight: "700" }}>
                                43kg
                            </Text>
                            <Text size={responsive["subtextSize"]} style={{ fontWeight: "500" }}>
                                Rác tái chế
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex>
                        <img width={responsive["imageSize"]} height={responsive["imageSize"]} alt="Rác hữu cơ" src={organicTrash} />
                        <Flex direction="column" align="stretch" justify="center" style={{ marginLeft: "10px" }}>
                            <Text size="3" style={{ fontWeight: "700" }}>
                                20kg
                            </Text>
                            <Text size={responsive["subtextSize"]} color="green" style={{ fontWeight: "500" }}>
                                Rác hữu cơ
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex>
                        <img width={responsive["imageSize"]} height={responsive["imageSize"]} alt="Rác vô cơ" src={inorganicTrash} />
                        <Flex direction="column" align="stretch" justify="center" style={{ marginLeft: "10px" }}>
                            <Text size="3" style={{ fontWeight: "700" }}>
                                26kg
                            </Text>
                            <Text size={responsive["subtextSize"]} color="green" style={{ fontWeight: "500" }}>
                                Rác vô cơ
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
