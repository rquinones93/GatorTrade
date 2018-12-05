const db = require('../connection');

const GET_MESSAGES = 'SELECT * FROM messages WHERE seller_id = $1';

const selectMessages = (seller_id) => {
    return db.query(GET_MESSAGES, [seller_id]);
};
module.exports = selectMessages;