import { Seo } from "@global/components";
import { Flex, Section } from "@radix-ui/themes";
import { useEffect } from "react";
import { Head } from "./components/head";
import { Control } from "./components/control";
import { Bottom } from "./components/bottom";
import { HomePageProps } from "./type";
import MapPng from "./images/Map.png";

export const HomePage = ({}: HomePageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    return (
        <>
            <Flex
                className=""
                direction="column"
                align="stretch"
                gap="3"
                style={{
                    backgroundImage: `url(${MapPng})`, // Chèn ảnh MapPng vào đây
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                }}
            >
                <Section size="1" pb="0">
                    <Head width="1072" height="108" />
                    <Control />
                    <Bottom width="1072" height="108" />
                </Section>
            </Flex>

            <Seo title="Home" />
        </>
    );
};

// Using for lazy loading page
export default HomePage;
