import databasePlugin from './plugins/database'
// import authPlugin from './plugins/auth'
import userRouts from './routes/users'
import Fastify from 'fastify';



async function buildApp() {
    const fastify = Fastify({ logger: true});

    await fastify.register(databasePlugin);
    // await fastify.register(authPlugin);

    await fastify.register(userRouts);

    fastify.get('/health', async (request, reply) => {
        return { status: 'ok', timestamp: new Date().toISOString() };
    });

    return fastify;
}

export default buildApp;