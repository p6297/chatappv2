<<<<<<< HEAD
const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema ({
 
    sender_id:{
        type: mongoose.Schema.types.ObjectId,
        ref:"User"
    },
    sender_id:{
        type: mongoose.Schema.types.ObjectId,
        ref:"User"
    },
    msg: {
        type:String,
        required:true
    }

},{timestamps:true})

const Chat = mongoose.model("user",ChatSchema)
module.exports = Chat;
=======
const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema ({
 
    sender_id:{
        type: mongoose.Schema.types.ObjectId,
        ref:"User"
    },
    sender_id:{
        type: mongoose.Schema.types.ObjectId,
        ref:"User"
    },
    msg: {
        type:String,
        required:true
    }

},{timestamps:true})

const Chat = mongoose.model("user",ChatSchema)
module.exports = Chat;
>>>>>>> abbd0246f8d539c0e97b318e5ef6873615582354
