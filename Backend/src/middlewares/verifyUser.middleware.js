const jwt = require('jsonwebtoken')

const verifyUser = (req,res,next) => {
    const token = req.cookies.token
    if(!token){
        const err = new Error('invalid token')
        err.status = 401
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