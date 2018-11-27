const express = require('express');
const router = express.Router();
const auth = require('../auth/actionAuthentication');
const db = require('../database/connection');

router.get('/', auth.userDashBoardAuthentication, (request, response, next) => {
  //Currently displays all messages
  let messageSearch = 'SELECT * FROM messages WHERE seller_id = $1';
  let sellID = request.user.user_id;
  
  //Todo: USER specific
  //let messageSearch = 'SELECT * FROM messages WHERE __________';

  let postSearch = 'SELECT * FROM items WHERE seller_id = $1';
  //User specific id placeholder
  let tempSellerID = request.user.user_id;

  db.query(messageSearch, [sellID])
    .then(messages => {
      db.query(postSearch, [tempSellerID])
        .then(posts => {
          response.render('pages/user', {
            title: "GatorTrade - User",
            messages: messages,
            posts: posts,
            name: `${request.user.first_name} ${request.user.last_name}`
          });
      }); 
  });
});

module.exports = router;