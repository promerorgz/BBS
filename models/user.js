const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    last: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    message: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
};

module.exports.FindUserByIdAndDelete = function (id, callback) {
    User.findOneAndDelete(id,callback);
};

module.exports.FindUserByIdAndUpdate = function (id, callback) {
    User.findOneAndUpdate(id, callback)
};

module.exports.FindShiftByIdAndUpdate = function (id, callback){
    User.findOneAndUpdate(id, callback)
};

module.exports.addUser = function(newUser, callback){
    // bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(newUser.password, salt, (err, hash) => {
    //         if(err) throw err;
    //         newUser.password = hash;
            newUser.save(callback);
        // });
    // });
};


module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
};
