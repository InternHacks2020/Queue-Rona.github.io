const express = require('express');
const {db} = require('../models/reservation-mod');

const bodyParser=require('body-parser');
const { nextTick } = require('process');
const mongoose = require('mongoose');
const   Reservation = mongoose.model('Reserve');
const router = express.Router();


router.get('/', async(req, res) => {
    try {
        await Reserve.findall().exec((err, posts) => {
            if (err) return res.json({ "message": err });
            res.json(posts);
        });
    } catch (err) {
        console.log(`failed with ${err}`)
        res.json({ message: err });
    }
});