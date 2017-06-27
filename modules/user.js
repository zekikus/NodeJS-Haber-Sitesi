/**
 * Created by Zeki on 23.06.2017.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var config = require('../config/database');

var UserSchema = mongoose.Schema({
    name: {
      type: String
    },
   username: {
       type: String,
       required: true
   },
    password: {
       type: String,
        required: true
    },
    email: {
       type: String,
        required: true
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = function (newUser,callback) {
    bcrypt.genSalt(10,function (err,salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword,hash,function (err,isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}