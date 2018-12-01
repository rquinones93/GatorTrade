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

router.post('/read', (request, response, next) => {
  let message = request.body;
  console.log(message.message_id);
  User.readMessage(message.message_id) 
    .then( () => {
      console.log("message got here");
      request.flash('success_msg', 'Messasge has been read');
      response.redirect('/user');
  }).catch(err => console.log(err));
});

module.exports = router;