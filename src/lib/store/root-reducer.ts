import { globalStatesReducer } from "@services/global-states";
import { fontReducer } from "@services/font";
import { languageReducer } from "@services/language";
import { loadingReducer } from "@services/loading";
import { localStorageReducer } from "@services/local-storage";
import { notificationReducer } from "@services/notification";
import { responsiveReducer } from "@services/responsive";
import { chatReducer } from "@pages/chat-demo/redux";

// Combine all service reducers
export const rootReducer = {
    globalStates: globalStatesReducer,
    notification: notificationReducer,
    localStorage: localStorageReducer,
    font: fontReducer,
    language: languageReducer,
    loading: loadingReducer,
    responsive: responsiveReducer,

    // Custom reducers
    chat: chatReducer,
};
