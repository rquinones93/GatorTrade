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

//Approve Post on admin dashboard
router.post('/approve', (request, response, next) => {
  let item = request.body;
  console.log(item.item_id);
  Item.approveItem(item.item_id) 
  .then( () => {
    request.flash('success_msg', 'Message has been approved');
    response.redirect('/admin');
  }).catch(err => console.log(err));
});

//Deny Post on admin dashboard
router.post('/deny', (request, response, next) => {
  let item = request.body;
  console.log(item.item_id);
  Item.denyItem(item.item_id) 
  .then( () => {
    request.flash('success_msg', 'Message has been Denied');
    response.redirect('/admin');
  }).catch(err => console.log(err));


});

module.exports = router;