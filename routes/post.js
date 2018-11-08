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

module.exports = router;