const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/auth.controllers')
const Validators = require('../validation/express.validation')

authRouter.post("/register", Validators.registerValidator, authController.register)
authRouter.post("/login", Validators.loginValidator,  authController.login)
authRouter.get("/check", authController.check)
authRouter.post("/logout", authController.logout)

module.exports = authRouter