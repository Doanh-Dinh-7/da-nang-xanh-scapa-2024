import { Center, Image } from "@components";
import { EmptyListProps } from "@global/components/empty-list/type";
import EmptyListImg from "./images/empty-list.png";

export const EmptyList = ({ children, ...props }: EmptyListProps) => {
	return (
		<Center direction="column" {...props}>
			<Image src={EmptyListImg} objectFit="contain" />
			{children}
		</Center>
	);
};
