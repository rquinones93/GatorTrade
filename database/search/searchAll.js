// Module used for Search Bar related search
const db = require('../connection');

// All Categories
const SEARCH_ALL = `SELECT * FROM items WHERE status = 'Accepted';`;

const searchAll = () => {
  // Query the DB and return results
  return db.any(SEARCH_ALL);
};

module.exports = searchAll;
