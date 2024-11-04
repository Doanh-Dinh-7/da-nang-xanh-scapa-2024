import { queryClient } from "@api/http-request/app-query-client";
import { router } from "@router";
import { FontProvider } from "@services/font/font-provider";
import { LanguageProvider } from "@services/language/language-provider";
import { ResponsiveProvider } from "@services/responsive";
import { store } from "@store";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <LanguageProvider>
                    <FontProvider>
                        <ResponsiveProvider>
                            <RouterProvider router={router} />
                        </ResponsiveProvider>
                    </FontProvider>
                </LanguageProvider>

                {/* <ReactQueryDevtools  /> */}
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
