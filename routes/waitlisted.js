const express = require('express');
const { nextTick } = require('process');
const { red } = require('color-name');
const router = express.Router();
const mongoose = require('mongoose');
const { db } = require('../models/Timeslots');
mongoose.set('debug', true);
const bodyParser = require('body-parser');
const Timeslots= require('../models/Timeslots')
const { time } = require('console');
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
//SUBMIT POSTS:
router.put('/', async(req, res) => {
    var timeslots = new Timeslots({
        "start_time": req.body.start_time,
        "end_time": req.body.end_time,
        "max_capacity": req.body.max_capacity,
        "current_capacity": req.body.current_capacity,
        "waitlisted_students": req.body.waitlisted_students
    });
    await Timeslots.findOne({
        start_time: timeslots.start_time
    }).exec((err, timeslots) => {
        if (err) {
            return res.json({ "message": err });;
        } else {
            if (timeslots.current_capacity < timeslots.max_capacity) {
                timeslots.reserved_students.push(req.body.reserved_students[0]);
                timeslots.current_capacity = timeslots.current_capacity + 1;
                timeslots.save();
            } else {
                timeslots.waitlisted_students.push(req.body.reserved_students[0]);
                timeslots.save();
            }
            res.json(timeslots);
        }
    });
});
//SUBMIT POSTS:

//DELETE ALL POST:
router.delete('/', async(req, res) => {
    await Timeslots.findOne({
        start_time:start_time.timeslots
    }).exec((err, timeslots) => {
        if (err) {
            return res.json({ "message": err });;
        } else {
            timeslots.reserved_students.pull(req.body.reserved_students);
            if (timeslots.waitlisted_students.length != 0) {
                timeslots.reserved_students.push(timeslots.waitlisted_students[0]);
                timeslots.waitlisted_students.pull(timeslots.waitlisted_students[0]);
            } else {
                console.log("SFDSDF");
                timeslots.current_capacity = timeslots.current_capacity - 1;
            }
            timeslots.save();
        }
        res.json(timeslots);
    });
});

module.exports = router;
