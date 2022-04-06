const fastify = require('fastify');

const build = (opts = {}) => {
  const app = fastify(opts);
  app.get('/', (request, reply) => ({ hello: 'world' }));

  return app;
};

module.exports = build;
