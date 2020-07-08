const express = require('express');
const { nextTick } = require('process');
const { red } = require('color-name');
const router = express.Router();
const mongoose = require('mongoose');
const { db } = require('../models/Waitlist');
mongoose.set('debug', true);
const bodyParser = require('body-parser');
const Waitlist = require('../models/Waitlist');
​
​
//GET POSTS:
router.get('/', async(req, res) => {
    try {
        await Waitlist.find().exec((err, waitlisted) => {
            if (err) return res.json({ "message": err });
            res.json(waitlisted);
        });
    } catch (err) {
        res.json({ message: err });
    }
});
​
//SUBMIT POSTS:
router.post('/', async(req, res) => {
    var waitlisted = new Waitlist(
        req.body
    );
    await waitlisted.save((err, waitlisted) => {
        if (err) return res.json({ "message": err });
        res.json(waitlisted);
    });
​
});
​
​
​
//DELETE ALL POST:
router.delete('/:waitlistedID', async(req, res) => {
    await Waitlist.remove((err, waitlisted) => {
        if (err) return res.json({ "message": err });
        res.json(waitlisted);
    });
});
​
​
​
module.exports = router;