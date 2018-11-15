const express = require('express');
const router = express.Router();

const db = require('../database/connection');

router.get('/', (request, response, next) => {

  let messageSearch = 'SELECT * FROM messages';
  //let messageSearch = 'SELECT * FROM messages WHERE /*USER VALUE GOES HERE*/'; 

  //let messages = db.query(messageSearch);
  //let posts = db.query(postSearch);


  db.query(messageSearch, [])
    .then(messages => {
      response.render('pages/user', {
        title: "GatorTrade - User",
        messages: messages
      });
    });
});

module.exports = router;

