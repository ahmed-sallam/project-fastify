const loadInvironmetnVariable = (envName) => {
  if (process.env[envName]) {
    return process.env[envName];
  }
  throw new Error(`${envName} env does not exist`);
};

module.exports = {
  database_uri: loadInvironmetnVariable('POSTGRES_URI'),
};
