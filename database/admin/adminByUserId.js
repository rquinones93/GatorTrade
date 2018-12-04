// Module used getting user data by id
const db = require('../connection');

const ADMIN_BY_USER_ID = `SELECT user_id FROM admin where user_id = $1`;

const adminByUserId = (user_id) => {
  // Query the DB and return results
  return db.oneOrNone(ADMIN_BY_USER_ID, [user_id]);
};

module.exports = adminByUserId;
