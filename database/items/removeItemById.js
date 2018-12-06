const db = require('../connection');

const REMOVE_ITEM =
  `DELETE FROM items WHERE item_id = $1`;

const removeItemById = (item_id) => {
  return db.none(REMOVE_ITEM, [item_id]);
}; // All new items are in a Pending State

module.exports = removeItemById;