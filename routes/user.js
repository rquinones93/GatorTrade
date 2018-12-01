const express = require('express');
const router = express.Router();

//const db = require('../database/connection');

const {User} = require('../database');

router.get('/', (request, response, next) => {
  
  //need to check the user logged in for sellerID in the future
  let tempSellerID = 1;

  User.selectMessages(tempSellerID)
    .then( (messages) => {
      User.selectPosts(tempSellerID)
        .then( (posts) => {
          response.render('pages/user', {
            title: "GatorTrade - User",
            messages: messages,
            posts: posts
          });
      });
  });
});

module.exports = router;