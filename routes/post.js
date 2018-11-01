const express = require('express');
const router = express.Router();


//const db = require('../database/index');

const db = require('../database/connection');


router.get('/', (request, response, next) => {
    response.render('pages/post',{
        title: "Post"
    });
});

router.get('/:post_id', (request, response, next) => {
    let localpostId = request.params.post_id;

    let searchInput = 'SELECT items.item_id FROM items WHERE items.item_id = $1';


    db.any(searchInput, [localpostId])
    .then( item => {
         console.log(item);
        response.render('pages/post', {
            title: "Post " + localpostId,
            item: item
        });
    }).catch( err =>{
        console.log(err);
    });
    



});

module.exports = router;