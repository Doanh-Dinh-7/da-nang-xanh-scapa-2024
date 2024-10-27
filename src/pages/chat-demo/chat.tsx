import { Seo } from "@global/components";
import { Container, Flex, Section, Text } from "@radix-ui/themes";
import { useEffect } from "react";
import { ChatDemoPageProps } from "./type";

export const ChatPage = ({}: ChatDemoPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    return (
        <>
            <Flex direction="column" align="stretch" height="100%">
                <Section size="1" flexGrow="1">
                    <Container size="3">
                        <Text>Content</Text>
                    </Container>
                </Section>
            </Flex>

            <Seo title="Chat Demo" />
        </>
    );
};

// Using for lazy loading page
export default ChatPage;
