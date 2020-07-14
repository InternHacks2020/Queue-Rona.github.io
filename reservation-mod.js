const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({

    timeslotID: String,

    UserID:String,

    Date: Number



    }, {

        collection: 'reservation'
    }

);

module.exports = mongoose.model('Reserve', ReservationSchema);