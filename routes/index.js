// Serve the index page
const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('pages/index');
});

router.get('/test', (request, response, next) => {
  response.render('pages/test');
});

module.exports = router;