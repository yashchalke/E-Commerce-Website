const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    Email: {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    Password:{
        type : String,
        required : true,
        trim : true
    },
    role:{
        type:String,
        enum : ['user','admin'],
        default : 'user'
    }

},{timestamps: true});

module.exports = mongoose.model("User",UserSchema);