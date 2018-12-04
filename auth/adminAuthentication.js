// User must be authenticated as an admin to access Admin Panel
// and Admin Actions
const Admin = require("../database/admin");

const adminAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {

    // Check if logged in user is an admin
    Admin.adminByUserId(request.user.user_id)
    .then(admin => {

      if(!admin) {
        // Logged in user is not an admin, redirect to user panel
        request.flash('error', 'You are not an admin.');
        response.redirect('/user');
      }

      // Logged in user is an admin, go to admin panel
      if( admin.user_id == request.user.user_id ) {
        return next();
      }

    }).catch( err => { console.log(err);});

  } else {
    // User is not logged in
    request.flash('error', 'You must login to access this page.');
    response.redirect('/login');
  }
};

module.exports = {
  adminAuthentication: adminAuthentication,
};