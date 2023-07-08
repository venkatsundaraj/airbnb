const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const authHandler = async function(req,res,next){
    let token

    if(req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
        
            const verifiedToken = req.headers.authorization.split(' ')[1]

            token = jwt.verify(verifiedToken, process.env.JWT_TOKEN)

            if(!token){
                throw new Error('user is not validated yet')
            }
            const user = await User.findById(token.id)
            
             req.user = user

            next()
    }catch(err){
        throw new Error(err)
    }
     }

    if(!token){
        res.status(401).json({message:'user not validated'})
    }

    
}

module.exports = authHandler