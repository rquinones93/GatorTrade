const db = require('../connection');

const GET_POSTS = 'SELECT * FROM items WHERE seller_id = $1';

const selectPosts = (seller_id) => {
    return db.query(GET_POSTS, [seller_id]);
};

module.exports = selectPosts;