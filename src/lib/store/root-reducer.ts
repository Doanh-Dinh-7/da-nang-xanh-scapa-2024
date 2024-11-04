import { homeReducer } from "@pages/home/redux";
import { cookieReducer } from "@services/cookie";
import { fontReducer } from "@services/font";
import { globalStatesReducer } from "@services/global-states";
import { languageReducer } from "@services/language";
import { loadingReducer } from "@services/loading";
import { localStorageReducer } from "@services/local-storage";
import { notificationReducer } from "@services/notification";
import { responsiveReducer } from "@services/responsive";

// Combine all service reducers
export const rootReducer = {
    globalStates: globalStatesReducer,
    notification: notificationReducer,
    localStorage: localStorageReducer,
    cookie: cookieReducer,
    font: fontReducer,
    language: languageReducer,
    loading: loadingReducer,
    responsive: responsiveReducer,

    // Custom reducers
    home: homeReducer,
};
