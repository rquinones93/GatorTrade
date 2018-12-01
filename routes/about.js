const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('pages/about', {
    title: "GatorTrade - About"
  });
});

// Render Developer About Page based on name
router.get('/:name', (request, response, next) => {
  let developer_name = request.params.name;
  response.render('pages/dev_profile/' + developer_name, {
    title: "GatorTrade - About"
  });
});

module.exports = router;