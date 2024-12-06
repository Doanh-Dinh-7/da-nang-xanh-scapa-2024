import { Seo } from "@global/components";
import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Content } from "./components/content";
import { Paper } from "./components/paper";
import { TypeNews } from "./components/typeNew";
import { Volunteer } from "./components/volunteer";
import { NewsPageProps } from "./type";
import { useResponsive } from "@services/responsive";

export const NewsPage = ({}: NewsPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    const responsive = useResponsive({
        initial: {
            shouldShowVoulunteer: false,
        },
        md: {
            shouldShowVoulunteer: true,
        },
    });

    const [indexPage, setIndexPage] = useState(1);

    const changeIndexPage = (index: number) => {
        setIndexPage(index);
    };

    return (
        <>
            <Flex direction="column" align="stretch" style={{ height: "100vh", background: "linear-gradient(to right, #f0fff4, #ffffff)" }}>
                <Flex direction="column" align="center" style={{ margin: "3vh 10vw" }}>
                    {/* <TypeNews style={{ position: "fixed", top: "5vh", zIndex: 2000 }} /> */}
                    <TypeNews changeIndexPage={changeIndexPage} tabIndex={indexPage} />
                </Flex>
                {indexPage === 1 && <Content />}
                {indexPage === 2 && <Paper />}
                {indexPage === 3 && responsive["shouldShowVoulunteer"] && <Volunteer />}
                <br />
            </Flex>

            <Seo title="News" />
        </>
    );
};

// Using for lazy loading page
export default NewsPage;
