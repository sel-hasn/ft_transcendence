import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { hashPassword, verifyPassword } from '../../utils/password';
import { LoginSchemaType, RegisterSchemaType } from '../types';

export function createUserHandlers(fastify: FastifyInstance) {
  type RegisterRequest = FastifyRequest<{ Body: RegisterSchemaType }>;
  type LoginRequest = FastifyRequest<{ Body: LoginSchemaType }>;

  const register = async (
    request: RegisterRequest,
    reply: FastifyReply,
  ) => {
    try {
      const { username, email, password, password_confirmation } = request.body as RegisterSchemaType;

      if (password !== password_confirmation) {
        return reply.code(400).send({
          error: 'Passwords do not match',
        });
      }

      const existingUser = fastify.db
        .prepare('SELECT id, email, username FROM users WHERE email = ? OR username = ?')
        .get(email, username) as { id: number; email: string; username: string } | undefined;

      if (existingUser) {
        const conflictField = existingUser.username === username ? 'username' : 'email';
        return reply.code(409).send({
          error: `User with this ${conflictField} already exists`,
        });
      }

      const passwordHash = await hashPassword(password);

      const result = fastify.db
        .prepare('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)')
        .run(username, email, passwordHash);

      const userId = result.lastInsertRowid as number;

      return reply.code(201).send({
        message: 'User registered successfully',
        user: {
          id: userId,
          username,
          email,
        },
      });
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({
        error: 'Internal server error',
      });
    }
  };

  const login = async (
    request: LoginRequest,
    reply: FastifyReply,
  ) => {
    try {
      const { identifier, password } = request.body as LoginSchemaType;

      const user = fastify.db
        .prepare('SELECT id, username, email, password_hash FROM users WHERE email = ? OR username = ?')
        .get(identifier, identifier) as {
          id: number;
          username: string;
          email: string;
          password_hash: string;
        } | undefined;

      if (!user) {
        return reply.code(401).send({
          error: 'Invalid credentials',
        });
      }

      const isValidPassword = await verifyPassword(password, user.password_hash);

      if (!isValidPassword) {
        return reply.code(401).send({
          error: 'Invalid credentials',
        });
      }

      return reply.code(200).send({
        messsage: 'Login successful',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({
        error: 'Internal server error. Please try again later.',
      });
    }
  };

  const listUsers = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const users = fastify.db.prepare('SELECT id, username, email FROM users').all() as Array<{
        id: number;
        username: string;
        email: string;
      }>;

      return reply.code(200).send(users);
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  };

  const getUserById = async (
    request: FastifyRequest<{ Params: { id: number } }>,
    reply: FastifyReply,
  ) => {
    try {
      const id = Number((request.params as any).id);
      if (Number.isNaN(id)) {
        return reply.code(400).send({ error: 'Invalid user id' });
      }

      const user = fastify.db
        .prepare('SELECT id, username, email FROM users WHERE id = ?')
        .get(id) as { id: number; username: string; email: string } | undefined;

      if (!user) {
        return reply.code(404).send({ error: 'User not found' });
      }

      return reply.code(200).send(user);
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  };

  return {
    register,
    login,
    listUsers,
    getUserById,
  };
}
