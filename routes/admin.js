const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('pages/admin', {
    title: "GatorTrade - Admin"
  });
});

module.exports = router;