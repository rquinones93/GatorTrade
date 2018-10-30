const express = require('express');
const router = express.Router();


const db = require('../database/index');


router.get('/', (request, response, next) => {
    response.render('pages/post',{
        title: "Post"
    });
});

router.get('/:post_id', (request, response, next) => {
    let localpostId = request.params.post;

    let searchInput = 'SELECT items.item_id FROM items WHERE items.item_id = $1';


    db.any(searchInput, [localpostId])
    .then( items => {
         console.log(items);
        response.render('pages/post', {
            title: "Post " + localpostId,
            items: items,
            currentCategory: currentCategory,
            post_id: localpostId
        });
    }).catch( err =>{
        console.log(err);
    });
    



});

module.exports = router;