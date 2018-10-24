// DB Connection to be used by all routes
const pgp = require('pg-promise')();
const connection = pgp(process.env.DATABASE_URL);

module.exports = connection;