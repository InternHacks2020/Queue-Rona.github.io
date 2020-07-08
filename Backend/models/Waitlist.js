const mongoose = require('mongoose');
​
const WaitlistSchema = mongoose.Schema({
​
        timeslot_name: String,
​
        waitlisted_students: Array
    }, {
​
        collection: 'waitlisted'
    }
​
);
​
module.exports = mongoose.model('Waitlist', WaitlistSchema);