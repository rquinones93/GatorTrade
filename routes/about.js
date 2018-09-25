const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('pages/about');
});

router.get('/:name', (request, response, next) => {
  let developer_name = request.params.name;
  response.render('pages/dev_profile/' + developer_name);
});

module.exports = router;