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
