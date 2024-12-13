

const errorhandler=(req,res,next)=>{
    res.status(error.status || 500) . json({
        message : error.message,
        status:error.status || 500,
        stack: error.stack
    })
}

module.exports = errorhandler