const dbConfig = require('knexfile').dbConfig;

const knex = require('knex')(dbConfig);

module.exports = require('bookshelf')(knex);
