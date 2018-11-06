// Module used getting all Item Categories
const db = require('../connection');

const GET_CATEGORIES = `SELECT * FROM categories`;

const getItemCategories = () => {
  // Query the DB and return results
  return db.any(GET_CATEGORIES);
};

module.exports = getItemCategories;
