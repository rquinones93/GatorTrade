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
    }).catch(err => {console.log(err);});
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
    }).catch(err => {console.log(err);});
});

// Filtered Search
router.post('/filter', (request, response, next) => {
  // Search Input can be undefined if accessing from index or
  // not input by user.
  let searchInput = (request.body.searchInput != undefined) ?
    request.body.searchInput : "";

  let searchCategory = request.body.categories;
  let filter_type = request.body.filter;

  Search.search(searchInput.toLowerCase(), searchCategory)
    .then(items => {
      
      // Prices Low to High 
      if (filter_type == "Price: Low to High") {
        items.sort((a,b) => {
          return a.price - b.price;
        });
      }

      // Prices High to Low
      if (filter_type == "Price: High to Low") {
        items.sort((a, b) => {
          return b.price - a.price;
        });
      }

      // By Meeting Place
      if (filter_type.includes("Meeting Place:")) {
        // Creates substring of just the location we're looking for
        const new_location = filter_type.replace("Meeting Place: ", "");
        let new_location_items = [];

        for (let i = 0; i < items.length; i++) {
          if (items[i].meeting_place == new_location) {
            new_location_items.push(items[i]);
          }
        }

        // Set items to the new, set that only contains selected meeting place
        items = new_location_items;
      }

      // Render Search Results
      response.render('pages/search', {
        title: "GatorTrade - Search",
        items: items,
        current_category: searchCategory,
        current_search: searchInput,
        current_filter: filter_type
      });
    }).catch(err => {console.log(err);});
});

module.exports = router;