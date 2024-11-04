import { Helmet } from "react-helmet";
import { SeoProps } from "./type";

export const Seo = ({ title, ...props }: SeoProps) => {
    return (
        <Helmet {...props}>
            <title>Đà Nẵng Xanh | {title}</title>
        </Helmet>
    );
};
