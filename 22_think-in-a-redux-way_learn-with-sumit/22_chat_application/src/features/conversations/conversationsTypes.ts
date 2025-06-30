export type TConversation = {
    id: number;
    participants: string;
    users: {
        email: string;
        name: string;
        id: number;
    }[];
    message: string;
    timestamp: number;
};

export type TAddConversion = {
    participants: string;
    users: {
        email: string;
        name: string;
        id: number;
    }[];
    message: string;
    timestamp: number;
};

export type TEditConversion = {
    message: string;
    timestamp: number;
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
};
