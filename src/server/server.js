const Hapi = require('hapi');
const User = require('./models/User');
const { serializeUsers } = require('./serializers/serializeUser');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000,
});

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    return User.findAll().then(users => reply(serializeUsers(users)));
  },
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
