const express = require('express');
const {db} = require('../models/User-mod');

const bodyParser=require('body-parser');
const { nextTick } = require('process');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = express.Router();



router.get('/', async(req, res) => {
    try {
        await User.find().exec((err, posts) => {
            if (err) return res.json({ "message": err });
            res.json(posts);
        });
    } catch (err) {
        console.log(`failed with ${err}`)
        res.json({ message: err });
    }
});

router.post('/',async(req,res)=>{
    console.log(`Received user payload ${JSON.stringify(req.body)}`);

    try {
        var user = new User(req.body);
        console.log(`User object to save ${JSON.stringify(user)}`)
        await user.save((err, user) => {
            if (err) return res.json({ "message": err });
            res.json(user);
        });
    } catch (err) {
        console.log(`failed with ${err}`)
        res.json({ "message": JSON.stringify(err) });
    }

});

router.delete('/:userID', async(req, res) => {
    await user.remove((err, user) => {
        if (err) return res.json({ "message": err });
        res.json(user);
    });
});

module.exports= router;
