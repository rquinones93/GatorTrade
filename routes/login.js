const express = require('express');
const router = express.Router();
 const passport = require('../auth');

router.get('/', (request, response, next) => {
  response.render('pages/login', {
    title: "GatorTrade - Log in"
  });
});

router.post('/', (request, response, next) => {
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/login',
    failureFlash: true
  })(request, response, next);
});

module.exports = router;