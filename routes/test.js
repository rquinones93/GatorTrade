// Serve the index page
const express = require('express');
const router = express.Router();
const { Search } = require('../database');

// Test
const db = require('../database/connection');

router.get('/', (request, response, next) => {
    response.render('pages/test',{
        title: "GatorTrade - Search",
        current_category: "All Categories"
    });
});

router.post('/', (request, response, next) => { //when hit search button
    let searchInput = request.body.searchInput.toLowerCase();
    let searchCategory = request.body.categories;

    Search.search(searchInput, searchCategory)
      .then( items => {
          console.log(items);
        response.render('pages/test', {
            title: "GatorTrade - Search",
            items: items,
            current_category: searchCategory
        });
      }).catch(err => {
          console.log(err);
      });
});

module.exports = router;