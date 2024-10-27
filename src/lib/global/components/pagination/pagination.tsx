import { Icon } from "@components";
import { PaginationProps } from "@global/components/pagination/type";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export const Pagination = ({ page = 1, totalPages = 1, onPageChange = (newPage) => {} }: PaginationProps) => {
	const [pagesRender, setPagesRender] = useState<any[]>([]);

	const OFFSET = 2;

	useEffect(() => {
		if (page < 1 || page > totalPages) return;

		const newPages = [];

		if (page - OFFSET > 1) {
			newPages.push(1);
			newPages.push("...");
		}

		for (let i = page - OFFSET; i <= page + OFFSET; i++) {
			if (i > 0 && i <= totalPages) newPages.push(i);
		}

		if (page + OFFSET < totalPages) {
			newPages.push("...");
			newPages.push(totalPages);
		}

		setPagesRender(newPages);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, totalPages]);

	const handleChangePage = (page: number) => {
		onPageChange(page);
	};

	return (
		<Flex
			my="9"
			justify="between"
			align="center"
			pt="4"
			style={{
				borderTop: "1px solid var(--gray-3)",
			}}
		>
			<Button variant="ghost" onClick={() => handleChangePage(page - 1)}>
				<Flex align="center" gap="2">
					<Icon ri="ri-arrow-left-line" size="5" />
					<Text weight="medium" size="2">
						Previous
					</Text>
				</Flex>
			</Button>
			<Flex align="center" gap="2">
				{pagesRender.map((pageRender) => {
					if (pageRender === "...") {
						return (
							<Text key={pageRender} size="2" mx="2">
								{pageRender}
							</Text>
						);
					}

					return (
						<Button key={pageRender} variant={pageRender === page ? "solid" : "soft"} size="2" onClick={() => handleChangePage(pageRender)}>
							<Text weight="medium" size="2">
								{pageRender}
							</Text>
						</Button>
					);
				})}
			</Flex>

			<Button variant="ghost" onClick={() => handleChangePage(page + 1)}>
				<Flex align="center" gap="2">
					<Text weight="medium" size="2">
						Next
					</Text>
					<Icon ri="ri-arrow-right-line" size="5" />
				</Flex>
			</Button>
		</Flex>
	);
};
