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
    request.flash('error_msg', "Passwords do not match");
    response.redirect('/resetpassword');
  } else {
    User.recoverPassword(newpassword, inputEmail, inputfirstname, inputlastname)
      .then( () => {
        console.log("Query works");
        request.flash('success_msg', "Password reset successful!");
        response.redirect(`/resetpassword`);
    }).catch(err => console.log(err));
  }
});

module.exports = router;