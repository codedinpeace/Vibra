const jwt = require('jsonwebtoken')

const createToken = (userId, res, next) => {
    if(!userId) {
        const err = new Error('invalid Id')
        err.status = 400
        return next(err)
    }

    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"1d"})
        res.cookie("token", token)
    } catch (error) {
        const err = error
        err.status = 400
        next(err)
    }
}

module.exports = createToken