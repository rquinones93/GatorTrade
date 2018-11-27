const express = require('express');
const router = express.Router();
const{ Item } = require('../database');

router.get('/', (request, response, next) => {

  Item.getPendingItems()
    .then( (items) => {
      response.render('pages/admin', {
        title: "GatorTrade - Admin",
        items: items
      });
    }).catch( err => { console.log(err); });
});

module.exports = router;