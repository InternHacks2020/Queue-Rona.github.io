/*
    Schema for MongoDB
*/

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

        firstname: String,

        lastname: String,

        email: String,

        userID: String
    }, {

        collection: 'postuser'
    }

);

module.exports = mongoose.model('User', UserSchema);