const express = require('express');
const router = express.Router();
const { User, Item } = require('../database');

router.get('/:item_id', (request, response, next) => {
    let local_item_id = request.params.item_id;

    Item.getItemById(local_item_id)
    .then( (item) => {

      User.getUserDataById(item.seller_id).then( (seller) => {
        seller.full_name = `${seller.first_name} ${seller.last_name}`;
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

  User.message(item_id, seller_id, messageInput)
    .then( () => {
      request.flash('success_msg', "Message has been sent to the seller!");
      response.redirect(`/post/${item_id}`);
    }).catch(err => console.log(err));
});


module.exports = router;