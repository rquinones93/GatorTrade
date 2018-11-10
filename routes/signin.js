const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('pages/signin', {
    title: "GatorTrade - SignIn"
  });
});

module.exports = router;