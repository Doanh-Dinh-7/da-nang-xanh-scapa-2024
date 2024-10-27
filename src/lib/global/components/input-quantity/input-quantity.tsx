import { InputQuantityProps } from "@global/components/input-quantity/type";
import { Flex, IconButton, Text } from "@radix-ui/themes";
import React from "react";

import { Icon } from "@components";
import style from "./style.module.scss";

export const InputQuantity = ({ value, onChange, max = 100, sizeButton = "4", disabled = false }: InputQuantityProps) => {
	const sizeIconButton = (Number(sizeButton) - 2 <= 0 ? 1 : Number(sizeButton) - 2).toString() as any;

	const handleIncreased = () => {
		if (value < max) onChange(value + 1);
	};

	const handleDecreased = () => {
		if (value > 1) onChange(value - 1);
	};

	const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		if (newValue > max) {
			onChange(max);
		} else {
			onChange(newValue);
		}
	};

	const handleBlurred = (e: React.FocusEvent<HTMLInputElement>) => {
		if (Number(e.target.value) < 1) {
			onChange(1);
		}
	};

	return (
		<Flex gap="2" align="center">
			<IconButton size={sizeIconButton} variant="soft" radius="full" onClick={handleDecreased} disabled={disabled || value <= 1}>
				<Icon ri="ri-subtract-line" size={sizeButton} weight="medium" />
			</IconButton>

			<Text
				asChild
				align="center"
				className={style["input-quantity"]}
				style={{
					width: value.toString().length + "rem",
				}}
			>
				<input type="number" value={value} onChange={handleChanged} onBlur={handleBlurred} />
			</Text>

			<IconButton size={sizeIconButton} variant="soft" radius="full" onClick={handleIncreased} disabled={disabled || value >= max}>
				<Icon ri="ri-add-line" size={sizeButton} weight="medium" />
			</IconButton>
		</Flex>
	);
};
