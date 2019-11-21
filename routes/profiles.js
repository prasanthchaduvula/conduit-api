var express = require('express');
var User = require("../models/user");
var auth = require("../modules/auth")
var router = express.Router();

// these routes are protected routes

// run the auth.validateToken middleware to protect these rotes
router.use(auth.validateToken);


// get single profile
router.get("/:username", (req,res,next) =>{
    User.findById(req.params.username, (err,user) => {
        if(err) return next(err);
        res.json({user});
    })
})




module.exports = router;
