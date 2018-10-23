// Serve the index page
const express = require('express');
const router = express.Router();

const db = require('../database/index');


// All Categories
const NO_SEARCH_INPUT_ALL = "SELECT * FROM items;"; 
// Specific Category
const NO_SEARCH_INPUT_CATEGORY = "SELECT * FROM items WHERE category LIKE '%' || $2 || '%'"; 
// Specific Category with given search input
const SEARCH_INPUT = "SELECT * FROM items WHERE category LIKE '%' || $2 || '%' AND (LOWER(title) LIKE  '%' || $1 || '%' OR LOWER(description) LIKE '%' || $1 || '%')"; 

router.get('/', (request, response, next) => {
    response.render('pages/test',{
        title: "Search Here",
        currentCategory: "All Categories"
    });
});

router.post('/', (request, response, next) => { //when hit search button
    let searchInput = request.body.searchInput.toLowerCase();
    let searchCategory = request.body.categories;
    let currentCategory = searchCategory;

    // Change All Categories to Wild Card
    if( searchCategory == "All Categories" ) { searchCategory = ""; }

    // Determine Search Query
    if (searchInput == "") 
    { 
        if( searchCategory == "" ) {
        searchQuery = NO_SEARCH_INPUT_ALL;
        } else {
        searchQuery = NO_SEARCH_INPUT_CATEGORY;
        }
    }
    else { 
        searchQuery = SEARCH_INPUT; 
    }

    db.any(searchQuery, [searchInput,searchCategory])
    .then( items => {
        // console.log(items);
        response.render('pages/test', {
            title: searchInput,
            items: items,
            currentCategory: currentCategory
        });
    }).catch( err =>{
        console.log(err);
    });
});

module.exports = router;