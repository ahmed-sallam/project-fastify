const fastify = require('fastify');
const db = require('./plugin/database');
const tempTestRoute = require('./routes/tempTestRoute');

const build = (opts = {}) => {
  const app = fastify(opts);
  app.register(db);
  app.register(tempTestRoute, { prefix: 'api/v1/test' });
  app.get('/', (request, reply) => ({ hello: 'world' }));

  return app;
};

module.exports = build;
