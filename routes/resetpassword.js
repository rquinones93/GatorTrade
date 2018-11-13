const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('pages/resetpassword', {
    title: "GatorTrade - Reset Password"
  });
});

module.exports = router;