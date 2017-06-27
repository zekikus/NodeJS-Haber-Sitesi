/**
 * Created by Zeki on 23.06.2017.
 */
var express = require('express');
var router = express.Router();
var User = require('./modules/user');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('./config/database');

//Kullanıcı Ekle
router.post('/user',function (req, res, next) {

   var newUser = new User({
       name: req.body.name,
       username: req.body.username,
       password: req.body.password,
       email: req.body.email
   });

   User.addUser(newUser, function (err, result) {
       if (err) res.json({success:false,msg:'Register error'});
       else res.json({success:true,msg:'Register success'});
   });
});

// Authenticate

router.post('/authenticate', function (req, res, next) {
   var username = req.body.username;
   var password = req.body.password;

   console.log(username + '-' + password);

   User.findOne({username:username},function (err, user) {
      if(err) res.json({success:false,msg:'Something went wrong'});
       if(!user){
           return res.json({success:false, msg: 'User not found'});
       }

      User.comparePassword(password, user.password, function (err, isMatch) {
          if(isMatch) {
              var token = jwt.sign(user, config.secret,{
                  expiresIn: 604800
              });

              res.json({
                  success:true,
                  token: 'JWT ' + token,
                  user: {
                      id: user._id,
                      name: user.name,
                      username: user.username,
                      email: user.email
                  }
              });
          }else{
              res.json({success:false, msg:'Wrong password'});
          }
      });

   });
});

module.exports = router;