require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


//MIDDLEWARE
app.use(express.json());

//Import Routes from posts.js
const postsRoute = require('../routes/posts');
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('This is a test for get method!');
});


//CONNECT TO DB
mongoose.connect(process.env.APP_DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to DB!'));
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// Start listening to the server:
app.listen(3000, () => console.log("server started"))