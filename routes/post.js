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

<<<<<<< HEAD
    let searchInput = 'SELECT items.item_id FROM items WHERE items.item_id = $1';
=======
    let searchInput = 'SELECT items.itemid FROM items WHERE items.itemid = $1';
>>>>>>> e23f00d24d57b743fc0b27f37c4b7fd36fa00f6d


    db.any(searchInput, [localpostId])
    .then( items => {
         console.log(items);
        response.render('pages/post', {
            title: "Post " + localpostId,
            items: items,
            currentCategory: currentCategory,
<<<<<<< HEAD
            post_id: localpostId
=======
            postID: localpostId
>>>>>>> e23f00d24d57b743fc0b27f37c4b7fd36fa00f6d
        });
    }).catch( err =>{
        console.log(err);
    });
    



});

module.exports = router;