// Serve the index page
const express = require('express');
const router = express.Router();
const { Search } = require('../database');

// Test
const db = require('../database/connection');

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

router.post('/:item_id', (request, response, next) => {
    let item_id = request.params.item_id;
    let searchQuery = `SELECT * FROM items WHERE item_id = $1;`;

    db.any(searchQuery, [item_id])
        .then(item => {
            console.log(item);
            response.render('pages/index');
        }).catch(err => { console.log(err); });

});
module.exports = router;