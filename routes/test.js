// Serve the index page
const express = require('express');
const router = express.Router();
const { Search } = require('../database');

router.get('/', (request, response, next) => {
    response.render('pages/test',{
        title: "GatorTrade - Search",
        currentCategory: "All Categories"
    });
});

router.post('/', (request, response, next) => { //when hit search button
    let searchInput = request.body.searchInput.toLowerCase();
    let searchCategory = request.body.categories;

    Search.search(searchInput, searchCategory)
      .then( items => {
        response.render('pages/test', {
            title: "GatorTrade - Search",
            items: items,
            currentCategory: searchCategory
        });
      }).catch(err => {
          console.log(err);
      });
});

module.exports = router;