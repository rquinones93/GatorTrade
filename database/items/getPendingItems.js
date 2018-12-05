// Module used to get only items pending admin approval
const db = require('../connection');

const GET_PENDING_ITEMS= `SELECT * FROM items WHERE status = $1`;

const getPendingItems = () => {
  // Query the DB and return results
  return db.any(GET_PENDING_ITEMS, ["Pending"]);
};

module.exports = getPendingItems;