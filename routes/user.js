const express = require('express');
const router = express.Router();
const auth = require('../auth/actionAuthentication');
let cloudinary = require('cloudinary');
const { Item, User } = require('../database');
const formValidation = require('../validation/password_validation');
// Set up cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

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
        userid: `${request.user.user_id}`,
        profile_picture: user.profile_picture
      });
    }).catch(err => {
      console.log(err);
    });
});

// Messages Tab - Read Message
router.post('/read', (request, response, next) => {
  let message = request.body;
  User.readMessage(message.message_id) 
    .then( () => {
      request.flash('success_msg', 'Messasge has been marked as read.');
      response.redirect('/user');
  }).catch(err => console.log(err));
});

// Messages Tab - Remove Message
router.post('/remove', (request, response, next) => {
  let message = request.body;
  User.removeMessage(message.message_id) 
    .then( () => {
      request.flash('success_msg', 'Messasge has been deleted.');
      response.redirect('/user');
  }).catch(err => console.log(err));
});

// Settings Tab - Change Password
router.post('/changePassword', (request, response, next) => {
  let formErrors = formValidation( request );

  if ( formErrors ) {
    renderErrors(response, formErrors);
  } else {
    let user_id = request.body;
    let password = request.body;

    User.changePassword(user_id, password)
      .then(() => {
        console.log("inside");
        request.flash('success_msg', 'Password change successful!');
        response.redirect('/user');
    }).catch(err => console.log(err => { renderErrors( response, err ); }));
  }
});

// Posts Tab - Remove Post
router.get('/remove_post/:post_id', auth.removePostAuthentication, (request, response, next) => {
  let item_id = request.params.post_id;
  console.log("I am here");

  Item.getItemById(item_id)
  .then((item) => {
    console.log("I am here 2");
    console.log(item);

    // Remove Item's Image from Cloudinary
    if (item.public_id != '') {
      cloudinary .uploader.destroy(item.public_id, { invalidate: true}, (error, result) => {
        console.log(result, error); // Print Errors if Any
      });
    }

    // Remove Item from DB
    Item.removeItemByItemId(item_id)
    .then(() => {
      request.flash('success_msg', 'Your post has been deleted.');
      response.redirect('/user');
      
    }).catch(err => console.log(err));
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
let renderErrors = (response, errors) => {
  response.redirect('/user');
};


module.exports = router;