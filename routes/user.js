var express = require('express');
var User = require("../models/user");
var auth = require("../modules/auth")
var router = express.Router();

// these routes are protected routes

// run the auth.validateToken middleware to protect these rotes
router.use(auth.validateToken);

// get a single user
router.get("/",(req,res,next) => {
    User.findById(req.user.userId,(err,user) =>{
        if(err) return next(err);
        res.json({user})
    })
})


// updating a single user
router.put("/", (req,res,next) => {
    User.findByIdAndUpdate(req.user.userId, req.body, { new: true }, (err,user) => {
        if(err) return next(err);
        res.json({user});
    })
})

module.exports = router;
