const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

/*
router.get('/reg',function(req, res, next){
//res.send('working chill');
let new1= new User({

name: "rupesh",
email:"rupesh@game.com",
password:"qwerty"
});

User.namenow(new1,(err,user) =>{

    if(err){
        res.json({success: false, msg:'Failed to register user'});
      } else {
        res.json({success: true, msg:'User registered'});
      }
  

});

//res.send('working chill2');


});
*/
console.log('hello here im');
// Register
router.post('/register', (req, res, next) => {

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});



// Authenticate
router.post('/authenticate', (req, res, next) => {
  console.log('authenticate working');
  const username = req.body.email;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    console.log('user found working');
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      console.log('password found working');
      
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});






module.exports = router;