// Module used getting item data by id
const db = require('../connection');

const GET_ITEM_BY_ID = `SELECT * FROM items WHERE item_id = $1`;

const getItemById = (item_id) => {
  // Query the DB and return results
  return db.oneOrNone(GET_ITEM_BY_ID, [item_id]);
};

module.exports = getItemById;
