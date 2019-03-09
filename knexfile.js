const config = require('src/config/config');

const {
  host,
  name,
  user,
  password,
  pool
} = config.database;

const { min, max } = pool;

const dbConfig = {
  client: 'mysql',
  connection: {
    host,
    user,
    password,
    database: name
  },
  pool: {
    min,
    max,
  },
  migrations: {
    tableName: 'migrations'
  }
};

module.exports = {
  dbConfig,
  development: dbConfig,
  production: dbConfig
};