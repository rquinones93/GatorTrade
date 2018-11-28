// Serve the index page
const express = require('express');
const router = express.Router();
const { Item } = require('../database');

router.get('/', (request, response, next) => {

  // Query DB for Categories to Populate buttons at top of the page
  // and get Recent Items
  Promise.all([Item.get4RecentItems(), Item.getItemCategories()])
  .then(([items, categories]) => {
    response.render('pages/index', {
      title: "GatorTrade",
      items: items,
      categories: categories
    });
  }).catch(err => {
    console.log(err);
  });

});

module.exports = router;