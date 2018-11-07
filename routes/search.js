// Serve the index page
const express = require('express');
const router = express.Router();
const { Search } = require('../database');

router.get('/', (request, response, next) => {
  Search.searchAll()
    .then(items => {
      response.render('pages/search', {
        title: "GatorTrade - Search",
        items: items,
        current_category: "All Categories"
      });
    }).catch(err => {
      console.log(err);
    });
});

router.post('/', (request, response, next) => { 
  // Search Input can be undefined if accessing from index or
  // not input by user.
  let searchInput = (request.body.searchInput != undefined) ? 
                     request.body.searchInput : "";
  
  let searchCategory = request.body.categories;

  Search.search(searchInput.toLowerCase(), searchCategory)
    .then(items => {
      response.render('pages/search', {
        title: "GatorTrade - Search",
        items: items,
        current_category: searchCategory,
        current_search: searchInput
      });
    }).catch(err => {
      console.log(err);
    });
});
module.exports = router;