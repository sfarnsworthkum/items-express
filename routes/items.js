var express = require("express");
var router = express.Router()
var db = require("../models")

router.get("/", function(req,res){
    db.Item.find().then(function(items){
        res.render('index', {items})
    }, function(err){
        res.send("there's an error!")
    })
});

router.get("/new", function(req,res){
    res.render("new");
});

router.get("/:id", function(req,res){
    db.Item.findById(req.params.id).then(function(item){
        res.render('show', {item})
    })
});

router.get("/:id/edit", function(req,res){
    db.Item.findById(req.params.id).then(function(item){
        //need to add debugger - link to edit -id is undefined 
        res.render('edit', {item})
    })
});

router.post("/", function(req,res){
    db.Item.create(req.body).then(function(){
        res.redirect('/')
    })
});

router.patch("/:id", function(req,res){
    db.Item.findByIdAndUpdate(req.params.id, req.body).then(function(data){
        res.redirect('/items')
    })
});

router.delete("/:id", function(req,res){
    db.Item.findByIdAndRemove(req.params.id).then(function(data){
        res.redirect('/items')
    })
});

module.exports = router
