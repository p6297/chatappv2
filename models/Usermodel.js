const mongoose = require("mongoose");

const UserSchema = mongoose.Schema ({
    name :{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    img: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    is_online: {
        type:String,
        default:"0"
    },

},{timestamps:true})

const User = mongoose.model("user",UserSchema)
module.exports = User;