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
router.post('/filter', (request, response, next) => {
  // Search Input can be undefined if accessing from index or
  // not input by user.
  let searchInput = (request.body.searchInput != undefined) ?
    request.body.searchInput : "";

  let searchCategory = request.body.categories;
  let search_type = request.body.filter;

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

      // Meeting Location Ascending
      if (search_type == "location_ascending") {
        items.sort((a, b) => {
          let meeting_place_a = a.meeting_place.toLowerCase(),
              meeting_place_b = b.meeting_place.toLowerCase();
          if (meeting_place_a < meeting_place_b) //sort string ascending
            return -1;
          if (meeting_place_a > meeting_place_b)
            return 1;
          return 0; //default return value (no sorting)
        });
      }

      // Meeting Location Descending
      if (search_type == "location_descending") {
        items.sort((a, b) => {
          let meeting_place_a = a.meeting_place.toLowerCase(),
            meeting_place_b = b.meeting_place.toLowerCase();
          if (meeting_place_a > meeting_place_b) //sort string descending
            return -1;
          if (meeting_place_a < meeting_place_b)
            return 1;
          return 0; //default return value (no sorting)
        });
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