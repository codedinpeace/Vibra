require('dotenv').config()
const cookieParser = require('cookie-parser')
const express = require('express')
const connectDB = require('./config/connect-db')
const authRouter = require('./routes/auth.routes')
const songsRouter = require('./routes/songs.routes')

const app = express()

// middlewares
app.use(express.json())
app.use(cookieParser())

// connectDb
connectDB()

// routes
app.use("/api/auth", authRouter)
app.use('/api/song', songsRouter)


module.exports = app