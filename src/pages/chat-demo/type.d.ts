export interface ChatDemoPageProps {}

export type ConversationMessage = {
    id: string;
    type: ChatSender;
    message: string;
};
