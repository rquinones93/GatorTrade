const db = require('../connection');

const DENY_ITEM = 'UPDATE items SET status = $1 WHERE item_id = $2';

const denyItem = (item_id) => {
  return db.query(DENY_ITEM, ["Denied", item_id]);
}; //Item is denied by admin //Perhaps want to delete instead
module.exports = denyItem;