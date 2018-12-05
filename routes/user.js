const express = require('express');
const router = express.Router();
const auth = require('../auth/actionAuthentication');
const {User} = require('../database');

router.get('/', auth.userDashBoardAuthentication, (request, response, next) => {
  
  //need to check the user logged in for sellerID in the future
  let seller_id = request.user.user_id;

  Promise.all([User.selectMessages(seller_id), User.selectPosts(seller_id), User.getUserDataById(seller_id)])
    .then(([messages, posts, user]) => {
      response.render('pages/user', {
        title: "GatorTrade - User",
        messages: messages,
        posts: posts,
        name: `${request.user.first_name} ${request.user.last_name}`,
        profile_picture: user.profile_picture
      });
    }).catch(err => {
      console.log(err);
    });
});

router.post('/read', (request, response, next) => {
  let message = request.body;
  User.readMessage(message.message_id) 
    .then( () => {
      request.flash('success_msg', 'Messasge has been marked as read.');
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

// Not Priority
// Update Profle Picture
// Get Current Profile Picture + Public ID
// Upload and Update
// Delete Old
// Redirect to Settings Tab
// router.post('/update_profile_picture', (request, response, next) => {
//   let user_id = request.user.user_id;

//   User.getUserDataById(user_id)
//   .then((user) => {
//     let old_profile_id = user.public_id
//   }).catch();
//   request.flash('success_msg', 'Profile Picture has been updated. View on Settings Tab.');
//   response.redirect('/user');
// });

module.exports = router;