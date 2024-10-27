import { Image } from "@components";
import { Flex, Text } from "@radix-ui/themes";
import cls from "classnames";
import GooglePayImg from "./images/googlepay.png";
import PayPalImg from "./images/paypal.png";
import { PaymentMethodProps, PaymentMethodType } from "./type";

import styles from "./style.module.scss";

const paymentMethodIcons: Record<PaymentMethodType, string> = {
	paypal: PayPalImg,
	googlepay: GooglePayImg,
};

export const PaymentMethod = ({ type, isSelected = false, className, children, ...props }: PaymentMethodProps) => {
	return (
		<Flex align="center" gap="2" className={cls(styles["payment-method"], isSelected && styles["selected"], className)} {...props}>
			<Image src={paymentMethodIcons[type]} width="4rem" height="3rem" objectFit="contain" className={styles["icon"]} />
			<Text weight="medium" className={styles["text"]}>
				{children}
			</Text>
		</Flex>
	);
};
