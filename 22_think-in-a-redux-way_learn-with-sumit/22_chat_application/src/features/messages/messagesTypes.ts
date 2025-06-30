export type TMessage = {
    id: number;
    conversationId: number;
    sender: {
        email: string;
        name: string;
        id: number;
    };
    receiver: {
        email: string;
        name: string;
        id: number;
    };
    message: string;
    timestamp: number;
};

export type TAddMessage = {
    conversationId: number;
    sender: {
        email: string;
        name: string;
        id: number;
    };
    receiver: {
        email: string;
        name: string;
        id: number;
    };
    message: string;
    timestamp: number;
};
