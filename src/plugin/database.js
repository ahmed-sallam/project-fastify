const fp = require('fastify-plugin');
const pgp = require('pg-promise')();
const applyMigrations = require('./helper/migration');
const config = require('../config');

const db = async (fastify, options, next) => {
  const dpConnection = pgp(config.database_uri);
  // register db as  a decorator to provide globally
  fastify.decorate('db', dpConnection);
  fastify.log.info('Migration is about to run');
  const migrationCount = await applyMigrations();
  fastify.log.info(`Migration applied count: ${migrationCount}`);
  next();
};

module.exports = fp(db);
