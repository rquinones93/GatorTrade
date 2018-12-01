const db = require('../connection');

const APPROVE_ITEM = 'UPDATE items SET status = $1 WHERE item_id = $2';

const approveItemByID = (item_id) => {
  return db.query(APPROVE_ITEM, ["Approved", item_id]);
}; //Item is approved by admin
module.exports = create;