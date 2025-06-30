export type RegisterRequest = {
    email: string;
    password: string;
    name: string;
};

export type LoginRequest = {
    email: string;
    password: string;
};

export type AuthResponse = {
    accessToken: string;
    user: {
        id: number;
        email: string;
        name: string;
    };
};
