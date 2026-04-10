const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/auth.controllers')

authRouter.post("/register", authController.register)
authRouter.post("/login", authController.login)
authRouter.get("/check", authController.check)
authRouter.post("/logout", authController.logout)

module.exports = authRouter