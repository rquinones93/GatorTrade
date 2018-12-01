const express = require('express');
const router = express.Router();
const { User, Item } = require('../database');

router.get('/:item_id', (request, response, next) => {
  // Get Item ID
  let local_item_id = request.params.item_id;

  // Get Item Data based on Item ID
  Item.getItemById(local_item_id)
  .then( (item) => {

    // Get User Data based on the item's seller_id
    User.getUserDataById(item.seller_id).then( (seller) => {
      seller.full_name = `${seller.first_name} ${seller.last_name}`;
      
      // Render Page
      response.render('pages/post', {
        title: "Post " + local_item_id,
        item: item,
        seller: seller,
        post_id: local_item_id
      });

    }).catch(err => { console.log(err);});
  }).catch( err => { console.log(err);});
});

router.post('/', (request, response, next) => {
  let {item_id, seller_id, messageInput} = request.body;

  // Send message to Seller. Sender's User ID not required
  User.message(item_id, seller_id, messageInput)
    .then( () => {
      
      // Redirect after message sent successfully
      request.flash('success_msg', "Message has been sent to the seller!");
      response.redirect(`/post/${item_id}`);
    }).catch(err => console.log(err));
});


module.exports = router;