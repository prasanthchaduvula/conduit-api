var express = require('express');
var User = require("../models/user");
var Article = require("../models/article");
var Tag = require("../models/tag");
var Comment = require("../models/comment");
var auth = require("../modules/auth");
var router = express.Router();


// get all articles
router.get("/", (req,res) =>{
    Article.find({},(err, articles) => {
        if(err) return res.json({err});
        res.json({articles});
    })
})

// get single article
router.get("/:slug", (req,res) => {
    Article.findOne({slug:req.params.slug}, (err,article) => {
        if(err) return res.json({err});
        res.json({article});
    })
})
    

// these routes are protected routes

// run the auth.validateToken middleware to protect these rotes
router.use(auth.validateToken);

// create article
router.post("/", (req,res) => {
    let { userId } = req.user;
    req.body.userId = userId;
    Article.create(req.body, (err,createdArticle) => {
        if(err) return res.json({err});
        // Converting string into tag array.
        createdArticle.tags.split(",").forEach(tag => {
            Tag.findOne({ tagName: tag }, (err, foundTag) => {
                if(err) return res.json({ err });
                if(!foundTag) {
                    Tag.create({ articleId: createdArticle._id, tagName: tag }, (err, createdTag) => {
                        if(err) return res.json({ err });
                    });
                } else if(foundTag) {
                    Tag.findByIdAndUpdate(foundTag._id, {$push: { articleId: createdArticle._id } }, { new: true },  (err, updatedTag) => {
                        if(err) return res.json({ err });
                    })
                }
            })
        });
        res.json({ createdArticle });
    })
})


// update article
router.put("/:slug", (req,res) => {
    Article.findOneAndUpdate({slug:req.params.slug}, req.body, (err,updatedArticle) => {
        if(err) return res.json({err});
        res.json({updatedArticle});
    })
})

// delete article
router.delete("/:slug", (req,res) => {
    Article.findOneAndDelete({slug:req.params.slug}, (err,deletedArticle) => {
        if(err) return res.json({err});
        res.json({deletedArticle});
    })
})

// -----------------------------------------------  
// -----------------------------------------------  

// feed - Article feed by the users you following
router.get("/feed", (req,res) => {
    User.findById(req.user.userId, (err,user) => {
        if(err) return res.json({err});
        user.following.forEach(e => {
            Article.find({userId: e}, (err,feed) => {
                if(err) return res.json({err});
                res.json({feed});
            })
        })
    })
})
// add comments to article
router.post("/:slug/comments", (req,res) => {
    Comment.create(req.body, (err,createdComment) => {
        if(err) return res.json({err});
        return res.json(createdComment);
    })
})

// get comments
router.get("/:slug/comments", (req,res) => {
    Comment.find({}, (err,comments) => {
        if(err) return res.json({err});
        return res.json({comments});
    })
})

// get a single comment
router.get("/:slug/comments/:id", (req,res) => {
    var id = req.params.id;
    Comment.findById(id, (err,comments) => {
        if(err) return res.json({err});
        return res.json(comments);
    })
})

// update comment
router.put("/:slug/comments/:id", (req,res) => {
    var id = req.params.id;
    Comment.findByIdAndUpdate(id, req.body, {new: true},(err,updatedComment) => {
        if(err) return res.json({err});
        return res.json(updatedComment);
    })
})

// delete comments
router.delete("/:slug/comments/:id", (req,res) => {
    var id = req.params.id;
    Comment.findByIdAndDelete(id, (err,deletedComment) => {
        if(err) return res.json({err});
        return res.json({success: true, msg: "Successful deleted"});
    })
})      


module.exports = router;
