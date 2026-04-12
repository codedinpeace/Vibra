const jwt = require('jsonwebtoken')
const redis = require('../config/redis.connection')

const verifyUser = async (req,res,next) => {
    const token = req.cookies.token
    if(!token){
        const err = new Error('invalid token')
        err.status = 401
        return next(err)
    }   

    const blackListedToken = await redis.get("blackListedToken")
    if(token === blackListedToken) {
        const err = new Error('token blacklisted')
        err.status = 409
        return next(err)
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        const err = error
        err.status = 400
        next(err)
    }
}

module.exports = verifyUser