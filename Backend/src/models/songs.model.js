const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
    mood:{
        type:String,
        enum:["happy", "sad", "neutral", "angry"],
        required:true,
    },
    playListId:{
        type:String,
        minlength:22,
    }
})

const songModel = mongoose.Model("songs", songSchema)
module.exports = songModel