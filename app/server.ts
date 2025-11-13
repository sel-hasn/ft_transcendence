import Fastify from 'fastify';
import type { FastifyError, FastifyRequest, FastifyReply } from 'fastify';
import rootRoutes from './routes/root.ts'

const fastify = Fastify({ logger: true});

fastify.register(rootRoutes);

fastify.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    request.log.error(error);
    const statusCode = error.statusCode || 500;
    reply.status(statusCode).send({ error: error.message })
})

const start = async () => {
    try {
        await fastify.listen({
            port: 3000,
            host: '0.0.0.0'
        })
        fastify.log.info('Server is running at http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();