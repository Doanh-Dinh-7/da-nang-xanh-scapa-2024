import { LinkProps as LinkUIProps } from "@radix-ui/themes/dist/cjs/components/link";

export type LinkProps = LinkUIProps & {
	to: string;
};
