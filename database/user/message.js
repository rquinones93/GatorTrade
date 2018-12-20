const db = require('../connection');

// Checks to see if the Email is already registered
const CREATE_MESSAGE = 'INSERT INTO messages (item_id, seller_id, item_title, message, status) VALUES ($1, $2, $3, $4, $5)';

const message = (item_id, seller_id, item_title, messageInput) => {
  return db.query(CREATE_MESSAGE, [item_id, seller_id, item_title, messageInput, "UNREAD"]);
};

module.exports = message;