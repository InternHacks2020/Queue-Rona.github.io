const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    userID: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Posts', PostSchema);
