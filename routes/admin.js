const express = require('express');
const router = express.Router();
const{ Item } = require('../database');

router.get('/', (request, response, next) => {

  Item.getPendingItems()
    .then( (items) => {
      response.render('pages/admin', {
        title: "GatorTrade - Admin",
        items: items
      });
    }).catch( err => { console.log(err); });
});

router.post('/approve', (request, response, next) => {
  let {item_id} = request.body;

  Item.approveItem(item_id) 
  .then( () => {
    request.flash('success_msg', 'Message has been approved');
    reponse.redirect('/admin')
  }).catch(err => console.log(err));


});

router.post()

module.exports = router;