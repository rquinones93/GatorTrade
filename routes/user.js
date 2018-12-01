const express = require('express');
const router = express.Router();
const auth = require('../auth/actionAuthentication');
const {User} = require('../database');

router.get('/', auth.userDashBoardAuthentication, (request, response, next) => {
  
  //need to check the user logged in for sellerID in the future
  let tempSellerID = request.user.user_id;

  User.selectMessages(tempSellerID)
    .then( (messages) => {
      User.selectPosts(tempSellerID)
        .then( (posts) => {
          response.render('pages/user', {
            title: "GatorTrade - User",
            messages: messages,
            posts: posts,
            name: `${request.user.first_name} ${request.user.last_name}`
          });
      });
  });
});

router.post('/read', (request, response, next) => {
  let message = request.body;
  User.readMessage(message.message_id) 
    .then( () => {
      console.log("message got here");
      request.flash('success_msg', 'Messasge has been read.');
      response.redirect('/user');
  }).catch(err => console.log(err));
});

router.post('/remove', (request, response, next) => {
  let message = request.body;
  User.removeMessage(message.message_id) 
    .then( () => {
      request.flash('success_msg', 'Messasge has been deleted.');
      response.redirect('/user');
  }).catch(err => console.log(err));
});
module.exports = router;