require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


//MIDDLEWARE
app.use(express.json());
app.use(express.static('Frontend'))

//Import Routes from posts.js
const postsRoute = require('../routes/user');
app.use('/user', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('This is a test for get method!');
});

const timeslotsRoute = require('./routes/timeslots');
app.use('/timeslots', timeslotsRoute);

const waitlistedRoute = require('./routes/waitlisted');
app.use('/waitlisted', waitlistedRoute)

//CONNECTING THE DATABASE

const db = mongoose.connection
var URL = 'mongodb+srv://TeamRona:internhacks2020@cluster0.9ibkx.mongodb.net/Post?retryWrites=true&w=majority';
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'));
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// Start listening to the server:
app.listen(3000, () => console.log("server started"))
