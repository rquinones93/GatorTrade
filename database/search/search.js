// Module used for Search Bar related search
const db = require('../connection');


// All Categories
const NO_SEARCH_INPUT_ALL = `SELECT * FROM items WHERE status = 'Approved';`;

// Specific Category
const NO_SEARCH_INPUT_CATEGORY = `SELECT * FROM items WHERE category, status = 'Approved' LIKE '%' || $2 || '%'`;

// Specific Category with given search input
const SEARCH_INPUT = `SELECT * FROM items WHERE category, status = 'Approved' LIKE '%' || $2 || '%' ` +
                                         `AND (LOWER(title) LIKE  '%' || $1 || '%' ` +
                                         `OR LOWER(description) LIKE '%' || $1 || '%')`;

const search = ( searchInput, searchCategory ) => {
  // Change All Categories to Wild Card
  if (searchCategory == "All Categories") {
    searchCategory = "";
  }

  // Determine Search Query
  if (searchInput == "") {
    if (searchCategory == "") {
      searchQuery = NO_SEARCH_INPUT_ALL;
    } else {
      searchQuery = NO_SEARCH_INPUT_CATEGORY;
    }
  } else {
    searchQuery = SEARCH_INPUT;
  }

  // Query the DB and return results
  return db.any(searchQuery, [searchInput, searchCategory]);
};

module.exports = search;
