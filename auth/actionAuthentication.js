// Logged in user must be the same owner of the item for editAuthentication
const { Item, User } = require('../database');

const userDashBoardAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  } else {
    request.flash('error', 'You must login to see the User Dashboard.');
    response.redirect('/login');
  }
};

const postAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  } else {
    request.flash('error', 'You must login to post an item for sale.');
    response.redirect('/login');
  }
};

const messageAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  } else {
    request.flash('error', 'You must login to message the seller.');
    response.redirect('/login');
  }
};

const editAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    // Check if logged in user is an admin
    Item.getItemById(request.params.post_id)
      .then(current_item => {

        if (!current_item) {
          // Post does not exist
          request.flash('error', 'Post does not exist. You cannot edit this post.');
          response.redirect('/user');
        }

        // Logged in user is not owner of post
        if (current_item.seller_id != request.user.user_id) {
          request.flash('error', 'You cannot edit this post.');
          response.redirect('/user');
        }

        // Logged in user is the owner of the post
        if (current_item.seller_id == request.user.user_id) {
          return next();
        }
      }).catch(err => {console.log(err);});
  } else {
    request.flash('error', 'You must login to see this page.');
    response.redirect('/login');
  }
};

const removePostAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    // Check if logged in user is an admin
    Item.getItemById(request.params.post_id)
      .then(current_item => {

        if (!current_item) {
          // Post does not exist
          request.flash('error', 'Post does not exist.');
          response.redirect('/user');
        }

        // Logged in user is not owner of post
        if (current_item.seller_id != request.user.user_id) {
          request.flash('error', 'You cannot remove this post.');
          response.redirect('/user');
        }

        // Logged in user is the owner of the post
        if (current_item.seller_id == request.user.user_id) {
          return next();
        }
      }).catch(err => {console.log(err);});
  } else {
    request.flash('error', 'You must login to see this page.');
    response.redirect('/login');
  }
};

module.exports = {
  userDashBoardAuthentication: userDashBoardAuthentication,
  postAuthentication: postAuthentication,
  messageAuthentication: messageAuthentication,
  editAuthentication: editAuthentication,
  removePostAuthentication: removePostAuthentication
};