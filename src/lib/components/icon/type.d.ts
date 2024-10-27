import { TextProps } from "@radix-ui/themes/dist/cjs/components/text";

export type IconProps = Omit<TextProps, "as" | "asChild"> & {
    ri: string;
};
