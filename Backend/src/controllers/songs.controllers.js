const songModel = require("../models/songs.model")

const createSongs = async (req,res, next)=>{
    try {
        const {mood, playListId} = req.body
        const songs = await songModel.create({
            mood:mood,
            playListId:playListId
        })

    res.status(201).json({message:"Song created", songs})
    } catch (error) {
        const err = error
        err.status = 400
        next(err)
    }
}
const getSongs = async (req,res, next)=>{
    try {
        const {mood} = req.query
        const song = await songModel.findOne({
            mood,
        })

        if(!song){
            const err = new Error("song for that mood doesn't exist")
            err.status = 404
            next(err)
        }

        res.status(200).json({song})

    } catch (error) {
        const err = error
        err.status = 400
        next(err)
    }
}

module.exports = {createSongs,getSongs}