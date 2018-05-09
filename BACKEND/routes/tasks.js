const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Test=require('../models/blog');
router.post('/add', (req, res, next) => {
    let  newBlog= new Test({
      name: req.body.name,
      date: req.body.date,
      title: req.body.title,
      content: req.body.content
    });
  
    Test.addblog(newBlog, (err, blog) => {
      if(err){
        res.json({success: false, msg:'Failed to Blog'});
      } else {
        res.json({success: true, msg:'Blog added'});
      }
    });
  });

  router.get('/search', (req, res, next) => {
  
    var name= req.query.name.toLowerCase();
     
    Test.getBlogByName(name, (err, blog) => {
      if(err){
        res.json({success: false, msg:'no Blog found'});
      } else {
        res.json({success: true, blog:blog});
      }
    });
  });
  router.get('/Load', (req, res, next) => {
  
    //var name= req.query.name.toLowerCase();
     
    Test.Load((err, blog) => {
      if(err){
        res.json({success: false, msg:'no Blog found'});
      } else {
        res.json({success: true, blog:blog});
      }
    });
  });
  module.exports = router;