const express = require('express');
const router = express.Router();
const { User } = require('../database');
const formValidation = require('../validation/signup_validation');

// Routes
router.get('/', (request, response, next) => {
  response.render('pages/signup', {
    title: "GatorTrade - Sign Up"
  });
});

router.post('/', (request, response, next) => {
  // Input Validation
  let formErrors = formValidation( request );

  // Render Errors and Quit if Input Errors Found
  if( formErrors ) { 
    renderErrors(response, formErrors); 

  } else {
    const { first_name, last_name, email, password } = request.body;

    // Create a new user with form input
    User.create(first_name, last_name, email, password)
      .then( errors => {
        // Render Errors if found ( email in use, invalid password )
        if( errors ) { renderErrors(response, errors); }

        // Successful Sign Up - Redirect to login
        request.flash('success_msg', "Congrats! You're registered!");
        response.redirect('/login');

      }).catch(err => {console.log(err);});
  }
});

let renderErrors = (response, errors) => {
  response.render('pages/signup', {
    title: 'GatorTrade - Sign Up',
    errors: errors
  });
};

module.exports = router;