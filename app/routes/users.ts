import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { hashPassword, verifyPassword } from '../utils/password';
import { RegisterSchema, LoginSchema, RegisterSchemaType, LoginSchemaType } from '../schemas/auth.schemas'

export async function userRouts(fastify: FastifyInstance) {
    // Creat new user
    fastify.route({
        method: 'POST',
        url: '/api/auth/register',
        schema: {
            body: RegisterSchema,
            response: {
                201: {
                    description: 'User registered successfully',
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                        user: {
                            id: { type: 'number' },
                            username: { type: 'string' },
                            email: 'string',
                        }
                    }
                },
                400: {
                    description: 'Bad request - validation error',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        handler: async (request: FastifyRequest<{ Body: RegisterSchemaType }>, reply: FastifyReply) => {
            try {
                const { username, email, password, password_confirmation } = request.body;
                
                if (!username || !email || !password || !password_confirmation) {
                    return reply.code(400).send({
                        error: 'Missing required fields: username, email, password, password_confirmation',
                    });
                }

                if (password !== password_confirmation) {
                    return reply.code(400).send({
                        error: 'Passwords do not match',
                    });
                }

                const existingUser = fastify.db.prepare('SELECT id FROM users WHERE email = ? OR username = ?').get(email, username);

                if (existingUser) {
                    return reply.code(409).send({
                        error: 'User already exists',
                    });
                }

                const passwordHash = await hashPassword(password);

                const result = fastify.db.prepare(`INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)`).run(username, email, passwordHash);

                const userId = result.lastInsertRowid as number;

                return reply.code(201).send({
                    message: 'User registered successfully',
                    user: {
                        id: userId,
                        username,
                        email,
                    }
                })
            } catch (err) {
                fastify.log.error(err);
                return reply.code(500).send({ error: 'Internal server error' });
            }
        }

    })
}