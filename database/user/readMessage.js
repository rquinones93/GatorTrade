const db = require('../connection');

// Checks to see if the Email is already registered
const READ_MESSAGE = 'UPDATE messages SET status = $1 WHERE message_id = $2';

const readMessage = (message_id) => {
  return db.query(READ_MESSAGE, ["READ", message_id]);
};

module.exports = readMessage;