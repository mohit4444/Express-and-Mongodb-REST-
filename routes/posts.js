const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// Fetching all data from db
router.get('/', async (req, resp) => {
    try {
        const allPosts = await Post.find();
        resp.json(allPosts);
    } catch (err) {
        resp.json({ message: err });
    }
});

// Fetching specific data from db
router.get('/:postID', async (req, resp) => {
    try {
        const specificPosts =await Post.findById(req.params.postID);
        resp.json(specificPosts);

    } catch (err) {
        resp.json({ message: err });
    }
});


//Inserting data in db
router.post('/', async (req, resp) => {
    const po = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await po.save();
        resp.json(savedPost);
    } catch (err) {
        resp.json({ message: err });
    }

});

// Deleting specific data from db
router.delete('/:postID', async (req, resp) => {
    try {
        const removedPost =await Post.remove({_id: req.params.postID});
        resp.json(removedPost);
        
    } catch (err) {
        resp.json({ message: err });
    }
});


// Updating specific data from db
router.patch('/:postID', async (req, resp) => {
    try {
        const updatedPost =await Post.updateOne({_id: req.params.postID},{$set:{
            title:req.body.title
        }});
        resp.json(updatedPost);
        
    } catch (err) {
        resp.json({ message: err });
    }
});

router.get('/specific', (req, resp) => {
    resp.send('We are on specific postssss');
});

module.exports = router;