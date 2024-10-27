import { OrderInfoFormData } from "@pages/checkout/components/order-info/type";

export type GlobalStatesState = {
	isCartShow: boolean;
	isOrderFormValid: boolean;
	orderFormData: Partial<OrderInfoFormData>;
};
