const express = require('express');
const router = express.Router();
const ticketpost = require('../model/ticket');


// to show all entries in database
router.get('/show', async(req,res)=>{
    try{
        const posts = await ticketpost.find();
        res.json(posts);
    } catch(err) {
        res.json({message: err});
    }
});


// query 1 : book a ticket 
router.get('/book',async (req,res)=>{
    const t= req.body.timing;
    var Showtime = new Date(t.split(' ').join('T') + 'Z');
    const post = new ticketpost({
        title: req.body.title,
        username: req.body.username,
        phonenumber: req.body.phonenumber,
        timing: req.body.timing,
        showtime: Showtime
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    } catch(err) {
        res.json({message: err});
    }
});

// query 2 : update the timings 
router.patch('/update/:postId', async(req,res)=>{
    try{
        const updatetime= req.body.timing;
        var updateshow = new Date(updatetime.split(' ').join('T') + 'Z');
        const updatedpost = await ticketpost.updateOne({ _id: req.params.postId }, { $set: { timing: req.body.timing, showtime: updateshow } });
        res.json(updatedpost);
    } catch(err) {
        res.json({message: err});
    }
});

// query 3 : find tickets for a particular time
router.get('/findbytime', async(req,res)=>{
    try{
        const postbytime = await ticketpost.find({ timing: req.body.timing });
        res.json(postbytime);
    } catch(err) {
        res.json({message: err});
    }
});

// query 4 : to delete a particular ticket
router.delete('/delete/:postId', async(req,res)=>{
    try{
        const removedpost = await ticketpost.remove({_id: req.params.postId });
        res.json(removedpost);
    } catch(err) {
        res.json({message: err});
    }
});

//query 5: to get user details based on ticket ID
router.get('/user/:postId', async(req,res)=>{
    try{
        const postbyid = await ticketpost.findById(req.params.postId);
        res.json({ username: postbyid.username, phonenumber: postbyid.phonenumber });
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;