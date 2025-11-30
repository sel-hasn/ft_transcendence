import { FastifyInstance } from 'fastify';
import { RegisterSchema, LoginSchema } from '../types'
import { createUserHandlers } from '../handlers/users';

async function userRoutes(fastify: FastifyInstance) {
    const handlers = createUserHandlers(fastify);
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
                },
                409: {
                    description: 'Conflict - user already exists',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                },
                500: {
                    description: 'Internal server error',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        handler: handlers.register

    });
    fastify.route({
        method: 'POST',
        url: '/api/auth/login',
        schema: {
            body: LoginSchema,
            response: {
                200: {
                    description: 'Login successful',
                    type: 'object',
                    properties: {
                        message: {type: 'string' },
                        user: {
                            type: 'object',
                            properties: {
                                id: { type: 'number' },
                                username: { type: 'string' },
                                email: { type: 'string' }
                            }
                        }
                    }
                },
                400: {
                    description: 'Bad request',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                },
                401: {
                    description: 'Unauthorized - invalid credentials',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        handler: handlers.login
    });

    // Get all users (no password hashes)
    fastify.route({
        method: 'GET',
        url: '/api/auth/users',
        schema: {
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            username: { type: 'string' },
                            email: { type: 'string' }
                        }
                    }
                }
            }
        },
        handler: handlers.listUsers
    });

    // Get a user by id
    fastify.route({
        method: 'GET',
        url: '/api/auth/users/:id',
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer' }
                },
                required: ['id']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        username: { type: 'string' },
                        email: { type: 'string' }
                    }
                },
                400: {
                    type: 'object',
                    properties: { error: { type: 'string' } }
                },
                404: {
                    type: 'object',
                    properties: { error: { type: 'string' } }
                }
            }
        },
        handler: handlers.getUserById
    });
}

export default userRoutes;
