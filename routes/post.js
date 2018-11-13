const express = require('express');
const router = express.Router();

const db = require('../database/connection');

router.get('/:post_id', (request, response, next) => {
    let localpostId = request.params.post_id;

    let searchInput = 'SELECT * FROM items WHERE items.item_id = $1';

    db.oneOrNone(searchInput, [localpostId])
    .then( items => {

        response.render('pages/post', {
            title: "Post " + localpostId,
            item: items,
            post_id: localpostId
        });
    }).catch( err =>{
        console.log(err);
    });
});

router.post('/', (request, response, next) => {
    
    let messageInput = request.body.messageInput;
    let item_id = request.body.item_id;
    let seller_id = request.body.seller_id;


    let sql = 'INSERT INTO messages (item_id, seller_id, message) VALUES ($1, $2, $3)';
    console.log(item_id);
    console.log(messageInput);
    console.log(seller_id);
    db.query(sql, [item_id, seller_id, messageInput]);

    request.flash('success_msg', "Message has been sent to the seller");
    response.redirect(`/post/${item_id}`);
});


module.exports = router;