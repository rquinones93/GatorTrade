const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('pages/post',{
        title: "Post"
    });
});
module.exports = router;