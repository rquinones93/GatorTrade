const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('pages/post',{
        title: "Post"
    });
});

router.get('/:post', (request, response, next) => {
    let localpostId = request.params.post;

    response.render('pages/post', {
      title: "Post " + localpostId,
      postID: localpostId
    });
});

module.exports = router;