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

router.post('/', (request, response, next) => { //when hit search button
  // let searchInput = (request.body.searchInput == undefined) ? "" : request.body.searchInput;
  // let searchCategory = request.body.categories;
  let searchInput = "";
  let searchCategory = "";
  if(request.body.searchInput) { 
    searchInput = request.body.searchInput; 
  }

  Search.search(searchInput, searchCategory)
    .then(items => {

      console.log(items);
      response.render('pages/search', {
        title: "GatorTrade - Search",
        items: items,
        current_category: searchCategory
      });
    }).catch(err => {
      console.log(err);
    });
});
module.exports = router;