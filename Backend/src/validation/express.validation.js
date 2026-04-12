const {body} = require('express-validator')
const validate = require('../config/validate.config')

const registerValidator = [
    body('username').isString().withMessage("username must be a string"),
    body('email').isEmail().withMessage("email format is invalid"),
    body('password').isLength({min:6}).withMessage("password length should be atleast 6 characters"),
    validate
]

const loginValidator = [
    body('email').isEmail().withMessage("email format is invalid"),
    body('password').isLength({min:6}).withMessage("password length should be atleast 6 characters"),
    validate
]

module.exports = {registerValidator, loginValidator}