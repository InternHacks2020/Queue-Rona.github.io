const mongoose = require('mongoose');
​
const TimeslotSchema = mongoose.Schema({
​
        timeslot_name: String,
​
        reserved_students: Array
    }, {
​
        collection: 'timeslots'
    }
​
);
​
module.exports = mongoose.model('Timeslots', TimeslotSchema);