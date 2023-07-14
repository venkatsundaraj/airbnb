const errorHandler = function(err,req,res,next){
    const statusCode = res.statusCode ? res.statusCode : 400

    res.status(statusCode)

    console.log(err.message)

    res.status(400).json({
        message:err.message,
        stack:process.env.NODE_ENV==='development' ? err.stack : null
    })
}

module.exports = errorHandler