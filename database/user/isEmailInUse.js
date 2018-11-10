const db = require('../connection');

// Checks to see if the Email is already registered
const GET_EMAIL = `SELECT email FROM users WHERE email = $1`;

const isEmailInUse = email => {
  return db.oneOrNone(GET_EMAIL, [email]);
};

module.exports = isEmailInUse;