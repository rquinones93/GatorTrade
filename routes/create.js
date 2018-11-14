const express = require('express');
const router = express.Router();

router.post('/', (request, response, next) => {
    const { title, description, price, category, meeting_place } = request.body;

    console.log(title, description, price, category, meeting_place);

    response.render('pages/create', {
        title: "GatorTrade - Create New Post"
    });
});

router.get('/', (request, response, next) => {


    response.render('pages/create', {
        title: "GatorTrade - Create New Post"
    });
});

module.exports = router;