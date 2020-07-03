const express = require('express');
const Post = require('../models/Post');
const { nextTick } = require('process');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are onposts');
});

router.post('/', async(req, res) => {
    const post = new Post({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        userID: req.body.userID
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

});

module.exports = router;
