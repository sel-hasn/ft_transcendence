import type {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
    // Root route
    fastify.route({
        method: 'GET',
        url: '/',
        handler: async (request: FastifyRequest, reply:FastifyReply) => {
            return {
                message: 'Welcome to My First Fastify API',
                endpoints: [
                    '/api/hello',
                    '/api/users',
                    '/api/user/:id',
                ]
            }
        }
    })
}