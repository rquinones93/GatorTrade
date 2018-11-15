const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('pages/user', {
    title: "GatorTrade - User"
  });
});

module.exports = router;

