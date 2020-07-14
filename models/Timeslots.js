const mongoose = require('mongoose');
const { db } = require('./reservation-mod');
​
const TimeslotSchema = mongoose.Schema({
​

​
        reserved_students: Array,

        waitlisted_students: Array,
        
        current_capacity: Number,
        
        max_capacity:Number,

        start_time: Date, String,

        end_time: Date, String
}
     ,{
​
        collection: 'timeslots'
    }
​
);

​
module.exports = mongoose.model('Timeslots', TimeslotSchema);