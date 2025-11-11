// const fastify = require('fastify')({
//   logger: true
// })

// // Declare a route
// fastify.get('/', function (request, reply) {
//   reply.send({ hello: 'world' })
// })

// // Run the server!
// fastify.listen({ port: 3000 }, function (err, address) {
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
//   // Server is now listening on ${address}
// })

// console.log(module)
// ok i get maybe 85~90% of this can you help me with start a base server for my group project ft_transcendence you can search for it in the web (do't give me the code just tell what is all the routs that will have and tips like this to help me write the first brick in this building that is the project, if i write the code i will give it to you to correct it and befor that what is the tests that i should do to my code after finshing it i'm responselbe just for (User authentication (local + OAuth),  user managment, jwt, 2fa) my other teammeats will do the rest), i just started reading about fastifay with i whant just an exisersise in this level but will be benifichell in the futuer, you did see my project tracker in start of this chat i'm now in the day 9 NOV and i whant to build the task of the priviuse but with more dietasle like 10 of the routs that will be in my project in the end of it
// const fastify = require('fastify')({ logger: true });

// fastify.get('/', (request, reply) => {
//   reply.code(200);
//   reply.type('text/html');
//   return '<h1>hello to the home paje</h1>';
// });

// fastify.get('/api/hello', (request, reply) => {
//   reply.code(200);
//   return {content: 'hello'};
// });

// fastify.get('/api/user/:id', (request, reply) => {
//   const id = request.params.id;
//   reply.code(200);
//   return {content: `hello ${id}`};
// });

// fastify.listen( {port: 3000}, (err, address) => {
//   if (err) {
//     fastify.log.error(err);
//     process.exit();
//   }
// })

// server.js
const fastify = require('fastify')({ 
    logger: true // Enable built-in logging
});

// Mock users database
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

// Root route - Welcome message
fastify.get('/', async (request, reply) => {
    return { 
        message: 'Welcome to My First Fastify API!',
        version: '1.0.0',
        endpoints: [
            '/api/hello',
            '/api/users',
            '/api/user/:id'
        ]
    };
});

// Simple hello route
fastify.get('/api/hello', async (request, reply) => {
    return { 
        greeting: 'Hello, World!', 
        timestamp: new Date().toISOString() 
    };
});

// Dynamic user by ID route
fastify.get('/api/user/:id', async (request, reply) => {
    const id = parseInt(request.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        reply.status(404);
        return { 
            error: 'User not found', 
            requestedId: id 
        };
    }

    return user;
});

// Get all users route
fastify.get('/api/users', async (request, reply) => {
    return users;
});

// Create new user route
fastify.post('/api/users', async (request, reply) => {
    try {
        const newUser = request.body;

        // Basic validation
        if (!newUser.name || !newUser.email) {
            reply.status(400);
            return { 
                error: 'Name and email are required',
                receivedData: newUser 
            };
        }

        // Add new user with incremental ID
        const newId = users.length > 0 
            ? Math.max(...users.map(u => u.id)) + 1 
            : 1;

        const createdUser = {
            id: newId,
            name: newUser.name,
            email: newUser.email
        };

        users.push(createdUser);

        // Return created user with 201 status
        reply.status(201);
        return createdUser;
    } catch (error) {
        fastify.log.error(error);
        reply.status(500);
        return { 
            error: 'Internal Server Error', 
            message: error.message 
        };
    }
});

// Handle 404 for undefined routes
fastify.setNotFoundHandler((request, reply) => {
    reply.status(404);
    return { 
        error: 'Not Found', 
        path: request.url,
        method: request.method
    };
});

// Start the server
const start = async () => {
    try {
        await fastify.listen({ 
            port: 3000, 
            host: '0.0.0.0' 
        });
        fastify.log.info(`Server listening on port 3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();