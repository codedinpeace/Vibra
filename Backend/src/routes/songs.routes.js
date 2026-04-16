const express = require('express')
const songsRouter = express.Router()
const songsController = require('../controllers/songs.controllers')

songsRouter.post("/create-songs", songsController.createSongs)
songsRouter.get("/get-songs", songsController.getSongs)

module.exports = songsRouter