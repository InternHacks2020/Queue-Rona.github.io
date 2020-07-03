const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

//MIDDLEWARE
app.use(bodyParser.json({ extended: false }));

//Import Routes from posts.js
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('This is a test for get method!');
});


//CONNECT TO DB
mongoose.connect(process.env.APP_DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'));
// Start listening to the server:
app.listen(3000, () => console.log("server started"))