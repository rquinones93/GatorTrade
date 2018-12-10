const express = require('express');
const router = express.Router();

const { User } = require('../database');

router.get('/', (request, response, next) => {
  response.render('pages/resetpassword', {
    title: "GatorTrade - Reset Password"
  });
});

router.post('/', (request, response, next) => {
  let {newpassword, reenterpassword, secret, inputEmail, inputfirstname, inputlastname} = request.body;
  //if(newpassword != reenterpassword){
    //request.flash('error_msg, Passwords did not match!')
    //response.redirect('/');
  //} else {
    User.recoverPassword(newpassword, inputEmail, inputfirstname, inputlastname)
    .then( (effectedrows) => {
      if (effectedrows == 1){
        //request.flash('success_msg', "Password recovery Successful!");
        response.redirect(`/`);
      } else {
        //request.flash('error_msg', "Info Provided is Wrong");
        response.redirect(`/`);
      }
    }).catch(err => console.log(err));

  //}
});

module.exports = router;