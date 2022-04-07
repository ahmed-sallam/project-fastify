const DBMigrate = require('db-migrate');

const applyMigrations = () =>
  new Promise((resolve, reject) => {
    const dbMigrate = DBMigrate.getInstance(true);
    dbMigrate.silence(true);
    dbMigrate.up((error, results = []) => {
      if (error) {
        reject(error);
      }
      resolve(results.length);
    });
  });

module.exports = applyMigrations;
