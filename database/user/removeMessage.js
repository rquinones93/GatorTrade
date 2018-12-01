const db = require('../connection');

// Checks to see if the Email is already registered
const REMOVE_MESSAGE = 'DELETE FROM messages WHERE message_id = $1';

const removeMessage = (message_id) => {
  return db.query(REMOVE_MESSAGE, [message_id]);
};

module.exports = removeMessage;