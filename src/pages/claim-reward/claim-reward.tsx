import { useApiClaimReward } from "@api/http-request/requests/api-server/hooks/smart-recycle-bin/use-api-claim-reward";
import { Image } from "@components";
import { Seo } from "@global/components";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { pushErrorNotification } from "@services/notification";
import { useAppDispatch, useAppSelector } from "@store";
import { stringifyRequestError } from "@utilities";
import cls from "classnames";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ClaimRewardPageProps } from "./type";

import styles from "./styles.module.scss";

export const ClaimRewardPage = ({}: ClaimRewardPageProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const { user } = useAppSelector((state) => state.globalStates);

    const { mutateAsync, data: apiResponse, error, isPending } = useApiClaimReward();

    useEffect(() => {
        if (!user) return;

        mutateAsync({
            token: searchParams.get("token") || "",
        })
            .then()
            .catch((error) => {
                dispatch(
                    pushErrorNotification({
                        message: "Đã có lỗi xảy ra khi tích điểm",
                        description: stringifyRequestError(error),
                    })
                );
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            <Flex position="relative" direction="column" justify="center" align="center" className={styles["container"]}>
                <Image position="absolute" src="https://cdn3.ivivu.com/2020/05/ban-dao-son-tra-dia-chi-thu-vi-cho-chuyen-di-mua-he-ivivu-1.jpg" className={styles["image"]} />
                <Box position="absolute" className={cls(styles["overlay"], error && styles["is-error"])} />
                {isPending ? (
                    <Flex position="relative" direction="column" align="center" gap="6" className={styles["content"]}>
                        <Heading as="h2" className={styles["title"]}>
                            ĐANG XỬ LÝ ... BẠN CHỜ MỘT CHÚT NHÉ
                        </Heading>

                        <Link to="/" replace>
                            <Button size="3">Trở về Trang Chủ</Button>
                        </Link>
                    </Flex>
                ) : (
                    apiResponse && (
                        <Flex position="relative" direction="column" align="center" gap="6" className={styles["content"]}>
                            <Heading as="h3" align="center" className={styles["subtitle"]}>
                                CHÚC MỪNG
                            </Heading>
                            <Heading as="h2" align="center" className={styles["title"]}>
                                BẠN ĐÃ TÍCH ĐƯỢC
                            </Heading>
                            <Heading as="h1" align="center" className={styles["green-point"]}>
                                {apiResponse.greenPoint}
                            </Heading>
                            <Heading as="h2" align="center" className={styles["subtitle"]}>
                                ĐIỂM XANH
                            </Heading>

                            <Link to="/" replace>
                                <Button size="3">Trở về Trang Chủ</Button>
                            </Link>
                        </Flex>
                    )
                )}
                {error && (
                    <Flex position="relative" direction="column" align="center" gap="6" className={styles["content"]}>
                        <Heading as="h2" className={styles["title"]}>
                            {stringifyRequestError(error)}
                        </Heading>
                        <Link to="/" replace>
                            <Button size="3" color="red">
                                Trở về Trang Chủ
                            </Button>
                        </Link>
                    </Flex>
                )}
            </Flex>

            <Seo title="Tích Điểm Xanh" />
        </>
    );
};

// Using for lazy loading page
export default ClaimRewardPage;
