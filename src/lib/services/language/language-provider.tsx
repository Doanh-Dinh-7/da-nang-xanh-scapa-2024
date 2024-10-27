import { useAppSelector } from "@store";
import { IntlProvider } from "react-intl";
import { shallowEqual } from "react-redux";
import { messagesCategory } from "./messages-category";

export function LanguageProvider({ children }: LanguageProviderProps) {
	const locale = useAppSelector((state) => state.language.locale, shallowEqual);

	return (
		<IntlProvider locale={locale} key={locale} messages={messagesCategory[locale]}>
			{children}
		</IntlProvider>
	);
}
