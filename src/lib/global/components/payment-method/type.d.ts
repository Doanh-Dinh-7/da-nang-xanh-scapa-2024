import { FlexProps } from "@radix-ui/themes";

export type PaymentMethodType = "paypal" | "googlepay";

export type PaymentMethodProps = FlexProps & {
    type: PaymentMethodType;
    isSelected?: boolean;
};
