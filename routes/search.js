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
        current_category: "All Categories",
        current_search: ""
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

// Filtered Search
router.post('/:search_type', (request, response, next) => {
  // Search Input can be undefined if accessing from index or
  // not input by user.
  let searchInput = (request.body.searchInput != undefined) ?
    request.body.searchInput : "";

  let searchCategory = request.body.categories;
  let search_type = request.params.search_type;

  Search.search(searchInput.toLowerCase(), searchCategory)
    .then(items => {
      
      // Prices Low to High 
      if(search_type == "low_to_high") {
        items.sort((a,b) => {
          return a.price - b.price;
        });
      }

      // Prices High to Low
      if (search_type == "high_to_low") {
        items.sort((a, b) => {
          return b.price - a.price;
        });
      }

      // By Meeting Location
      if (search_type == "meeting_location") {
        const new_location = request.body.updated_location; 
        let new_location_items = [];

        for( let i = 0; i < items.length; i++ ) {
          if(items[i].meeting_place == new_location) {
            new_location_items.push(items[i]);
          }
        }

        items = new_location_items;
      }

      // Render Search Results
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