import { error } from "console";
import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";


interface RegisterBody {
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}

// Mock users database
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

export default async function (fastify: FastifyInstance, opt: FastifyPluginOptions) {
    fastify.route({
        method: 'POST',
        url: '/register',
        handler: async (request: FastifyRequest<{ Body: RegisterBody }>, reply: FastifyReply ) => {
            const { username, email, password, password_confirmation} = request.body;

            if (!username || !email || !password || !password_confirmation) {
                reply.status(400);
                return { error: 'All fields are required' };
            }

            if (password !== password_confirmation) {
                reply.status(400);
                return { error: 'Passwords do not match' }
            }
        }
    });
}