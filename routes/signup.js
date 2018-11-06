const express = require('express');
const router = express.Router();

router.post('/', (request, response, next) => {
  const { first_name, last_name, email, password } = request.body;
  console.log(first_name, last_name, email, password);

  response.status(200).send("We out here");
});

module.exports = router;