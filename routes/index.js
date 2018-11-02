// Serve the index page
const express = require('express');
const router = express.Router();
const { Item } = require('../database');

router.get('/', (request, response, next) => {
  Item.get6RecentItems()
    .then( items => {
        /// Get 5 Most Recent
      response.render('pages/index', {
        title: "GatorTrade",
        items: items
      });
    }).catch( err => {
      console.log(err);
    });
});

module.exports = router;