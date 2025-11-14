import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { z, ZodError } from 'zod';

const RegisterSchema = z.object({
    username: z.string().min(4).max(20),
    email: z.string().email(),
    password: z.string().min(8),
    password_confirmation: z.string().min(8),
}).refine(data => data.password === data.password_confirmation, {
    message: 'Passwords do not match',
    path: ['password_confirmation'],
})

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
        handler: async (request: FastifyRequest, reply: FastifyReply ) => {
            try {
            const validatedData = RegisterSchema.parse(request.body);
            
            const { username, email, password } = validatedData;

            return reply.status(201).send({ message: 'User registered', user: { username, email } });
            } catch (err) {
                if (err instanceof ZodError) {
                    const formattedErrors = err.issues.map((issues) => ({
                        field: issues.path.join('.'),
                        message: issues.message,
                    }));
                    return reply.status(400).send({
                        error: 'Validation failed',

                        details: formattedErrors,
                    })
                }
            }
        }
    });

    fastify.route({
        method: 'POST',
        url: '/loging',
        handler: async (request: FastifyRequest, reply: FastifyReply ) => {
            
        }
    });
}