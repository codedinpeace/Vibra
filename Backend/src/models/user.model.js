const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        minLength:6
    }
}, {timestamps:true})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel