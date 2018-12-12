const express = require('express');
const router = express.Router();
const auth = require('../auth/adminAuthentication');
const{ Item, User } = require('../database');

router.get('/', auth.adminAuthentication, (request, response, next) => {

  // Query Database for all Pending Items to populate Approve/Deny Table
  Item.getPendingItems()
    .then( (items) => {
      response.render('pages/admin', {
        title: "GatorTrade - Admin",
        items: items
      });
    }).catch( err => { console.log(err); });
});

router.get('/post/:item_id', (request, response, next) => {
  // Get Item ID
  let local_item_id = request.params.item_id;

  // Get Item Data based on Item ID
  Item.getItemById(local_item_id)
    .then((item) => {
  
      // Get User Data based on the item's seller_id
      User.getUserDataById(item.seller_id).then((seller) => {
        seller.full_name = `${seller.first_name} ${seller.last_name}`;

        // Render Page
        response.render('pages/post', {
          title: "Post " + local_item_id,
          item: item,
          seller: seller,
          post_id: local_item_id
        });

      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
    });
});

//Approve Post on admin dashboard
router.post('/approve', (request, response, next) => {
  let item = request.body;
  Item.approveItem(item.item_id) 
  .then( () => {
    request.flash('success_msg', 'Message has been approved');
    response.redirect('/admin');
  }).catch(err => console.log(err));
});

//Deny Post on admin dashboard
router.post('/deny', (request, response, next) => {
  let item = request.body;
  Item.denyItem(item.item_id) 
    .then( () => {
      request.flash('success_msg', 'Message has been Denied');
      response.redirect('/admin');
  }).catch(err => console.log(err));
});

module.exports = router;