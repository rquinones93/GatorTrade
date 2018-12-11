const express = require('express');
const router = express.Router();
const { User } = require('../database');

router.get('/', (request, response, next) => {
  response.render('pages/resetpassword', {
    title: "GatorTrade - Reset Password"
  });
});

router.post('/', (request, response, next) => {
  //get input from page
  let {newpassword, reenterpassword, secret, inputEmail, inputfirstname, inputlastname} = request.body;
  if (newpassword != reenterpassword) {
    request.flash('error', "Passwords do not match!");
    response.redirect('/resetpassword');
    console.log("Passwords do not match");

  } else {
    User.recoverPassword(newpassword, inputEmail, inputfirstname, inputlastname) // using secret -> (newpassword, inputEmail, inputfirstname, inputlastname, secret)
      .then( (person) => {
        console.log("after hash");
        if (person.length == 1){ //user was changed
          request.flash('success_msg', "Password reset successful!");
          response.redirect(`/resetpassword`);
        } else if (person.length == 0) { //no user found with info
          request.flash('error', "Please Enter Valid User Info!");
          response.redirect(`/resetpassword`);
        } else { //multiple users with same name, email, and last name
          request.flash('success_msg', "Password reset for multiple!");
          response.redirect(`/resetpassword`);
        }
    }).catch(err => console.log(err));
  }
});

module.exports = router;