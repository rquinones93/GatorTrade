const express = require('express');
const router = express.Router();

const db = require('../database/connection');

router.get('/', (request, response, next) => {
  //Currently displays all messages
  let messageSearch = 'SELECT * FROM messages';
  
  //Todo: USER specific
  //let messageSearch = 'SELECT * FROM messages WHERE __________';

  let postSearch = 'SELECT * FROM items WHERE seller_id = $1';
  //User specific id placeholder
  let tempSellerID = 1;

  db.query(messageSearch, [])
    .then(messages => {
      db.query(postSearch, [tempSellerID])
        .then(posts => {
          response.render('pages/user', {
            title: "GatorTrade - User",
            messages: messages,
            posts: posts
          });
      }); 
  });
});

module.exports = router;

