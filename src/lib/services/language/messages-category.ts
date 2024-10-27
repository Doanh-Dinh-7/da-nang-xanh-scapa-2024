import { homeMessages } from "@pages/home";

// Generate all messages of the application with specified locale
function generateMessages(messageCollections: MessageCollection[], locale: LocaleName): Message {
	return messageCollections.reduce((result, messageCollection) => {
		const messageItems: MessageItem[] = Object.values(messageCollection);
		const collectionMessages = messageItems.reduce((result, messageItem) => {
			result[messageItem.id] = messageItem[locale];
			return result;
		}, {} as Message);

		return {
			...result,
			...collectionMessages,
		};
	}, {} as Message);
}

// All messages of the application
const rawMessages: MessageCollection[] = [homeMessages];

// Generated messages for each locale
const enMessages = generateMessages(rawMessages, "en");
const viMessages = generateMessages(rawMessages, "vi");

/**
 * All messages of the application with specified locale
 *
 * @example messagesCategory.en => All messages of the application with English locale
 * @example messagesCategory.vi => All messages of the application with Vietnamese locale
 */
export const messagesCategory: Record<LocaleName, Message> = {
	en: enMessages,
	vi: viMessages,
};
