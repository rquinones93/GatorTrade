const express = require('express');
const router = express.Router();
 const passport = require('../auth/index');

router.get('/', (request, response, next) => {
  response.render('pages/login', {
    title: "GatorTrade - Log in"
  });
});

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/login',
    failureFlash: true
  }), (request, response, next) => {
    response.redirect('/user');
});

module.exports = router;