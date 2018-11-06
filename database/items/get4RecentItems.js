// Module used for 6 Most Recent Posts 
// TODO: UPDATE TO ONLY INCLUDE APPROVED POSTS
const db = require('../connection');

const GET_4_RECENT_ITEMS = `SELECT * FROM items ORDER BY item_id DESC LIMIT 4`;

const get4RecentItems = () => {
  // Query the DB and return results
  return db.any(GET_4_RECENT_ITEMS);
};

module.exports = get4RecentItems;
