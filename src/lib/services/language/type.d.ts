interface LanguageProviderProps {
	children: any;
}

type LocaleName = "en" | "vi";

type MessageItem = {
	id: string;
} & Record<LocaleName, string>;

type MessageCollection = Record<string, MessageItem>;

type Message = Record<string, string>;
