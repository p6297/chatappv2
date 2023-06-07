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