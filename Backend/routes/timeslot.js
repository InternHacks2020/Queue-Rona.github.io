const express = require('express');
const Post = require('../models/Timeslots');
const { nextTick } = require('process');
const { red } = require('color-name');
const router = express.Router();
const mongoose = require('mongoose');
const { db } = require('../models/Timeslots');
mongoose.set('debug', true);
const bodyParser = require('body-parser');
const Timeslots = require('../models/Timeslots');
​
​
//GET POSTS:
router.get('/', async(req, res) => {
    try {
        await Timeslots.find().exec((err, timeslots) => {
            if (err) return res.json({ "message": err });
            res.json(timeslots);
        });
    } catch (err) {
        res.json({ message: err });
    }
});
​
//SUBMIT POSTS:
router.post('/', async(req, res) => {
    var timeslots = new Timeslots(
        req.body
    );
    await timeslots.save((err, timeslots) => {
        if (err) return res.json({ "message": err });
        res.json(timeslots);
    });
​
});
​
​
​
//DELETE ALL POST:
router.delete('/:postID', async(req, res) => {
    await Post.remove((err, timeslots) => {
        if (err) return res.json({ "message": err });
        res.json(timeslots);
    });
});
​
​
​
module.exports = router;