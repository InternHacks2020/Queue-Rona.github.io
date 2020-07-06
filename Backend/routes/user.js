const express = require('express');
const {db} = require('../models/User-mod');

const bodyParser=require('body-parser');
const { nextTick } = require('process');
const { Mongoose } = require('mongoose');
const router = express.Router();


//GET  all users:
// router.get('/',async(req, res) => {
//     res.json(req.body)
    
// })
    //try {
        // const user = await user.find();
        // res.json(users);
    // } catch (err) {
        // res.json({ message: err });
    
//});



//SUBMIT POSTS:
// router.post('/', async(req, res) => console.log(req.body)

// );

// //DELETE POST:
// router.delete('/:postID', async(req, res) => {
//     try {
//         const removedPost = await Post.remove({ _id: req.params.postId });
//         res.json(removedPost);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });



// module.exports = router;


// https:
router.get('/', async(req, res) => {
    try {
        await User.find().exec((err, posts) => {
            if (err) return res.json({ "message": err });
            res.json(posts);
    });
 } catch (err) {
        res.json({ message: err });
    }
});

router.post('/',async(req,res)=>{
    var user = new User(
        req.body
    );
    await user.save((err, user) => {
        if (err) return res.json({ "message": err });
        res.json(user);
    });

});

router.delete('/:userID', async(req, res) => {
    await user.remove((err, user) => {
        if (err) return res.json({ "message": err });
        res.json(user);
    });
});

module.exports= router;