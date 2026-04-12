const handleError = (err, req,res,next) => {

    const status = err.status || 500

    res.status(status).json({
        message:err.message,
        stack:err.stack
    })       
}

module.exports = handleError