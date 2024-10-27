import { Footer, Navigator, Splash, Toast } from "@global/components";
import { Box, Flex, Theme } from "@radix-ui/themes";
import { AppSuspense } from "@services/loading";
import { MotionConfig } from "framer-motion";
import { Outlet } from "react-router-dom";
import { register } from "swiper/element/bundle";

// Remix icon
import "remixicon/fonts/remixicon.css";

// Radix UI
import "@radix-ui/themes/styles.css";

// Global style
import "./style/global.style.css";

// Swiper
register();

export const Root = () => {
    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <Theme accentColor="green">
                <Flex direction={"row"} style={{ height: "100vh" }}>
                    {/* Navigation bar */}
                    <Navigator flexGrow="0" />

                    {/* Notification will show here */}
                    {/* <Alert className="fixed top-16 left-0 w-full" /> */}

                    <Box id="main" flexGrow="1" overflowY="scroll">
                        <AppSuspense>
                            {/* Page will render here */}
                            <Outlet />
                        </AppSuspense>
                    </Box>

                    {/* <Footer /> */}
                </Flex>

                {/* Application notifications */}
                <Toast />

                {/* Splash */}
                {/* TODO: Waiting Thang upgrade splash */}
                {/* <Splash /> */}
            </Theme>
        </MotionConfig>
    );
};
