const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('pages/login', {
    title: "GatorTrade - Log in"
  });
});

module.exports = router;