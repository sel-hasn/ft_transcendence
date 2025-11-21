export interface User {
    id: number;
    username: string;
    email: string;
    avatar_url?: string;
    email_verified: boolean;
    status: 'online' | 'offline' | 'in-game';
    created_at: string;
    updated_at: string;
}

export interface UserCreatePayload {
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface UserLoginPayload {
    identifier: string; // email or username,
    password: string;
}