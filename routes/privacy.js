const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('pages/privacy', {
    title: "GatorTrade - Privacy Policy"
  });
});

module.exports = router;