const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const generateJwt = function(id){
    const token = jwt.sign({id:id},process.env.JWT_TOKEN, {
        expiresIn:30 * 24* 60 * 60
    })
    return token
}

exports.loginHandler = asyncHandler(async function(req,res,next){
    try{const {email, password} = req.body

    if(!email || !password){
        throw new Error('Please enter valid email and password')
    }
    const user = await User.findOne({email:email})

    if(!user){
        throw new Error('Cannot identify the user')
    }
    const decryptedPassword = await bcrypt.compare(password, user.password)

    if(!decryptedPassword){
        return res.status(401).json({message:'please enter the correct password'})
    }

    const loggedInUser = {
        id:user._id,
        userName:user.userName,
        password:user.password,
        email:user.email,
        token:generateJwt(user._id)
    }

    return res.status(200).json(loggedInUser)

}catch(err){
    throw new Error(err)
}
})

exports.registerHandler = asyncHandler(async function(req,res,next){
    try{
        const {userName, email, password, confirmPassword} = req.body
        if(!userName || !email || !password ){
            throw new Error('all fields are needed')
        }
        console.log(userName, email, password, confirmPassword)

        
        const existedEmail = await User.findOne({email:email})

        if(existedEmail){
            throw new Error('User already exists')
            // return res.status(400).json({message:'user already exist'})
        }

        const encryptedPassword = await bcrypt.hash(password, 14)

        const user = await User.create({
            userName:userName,
            email:email, 
            password:encryptedPassword
        })

        
        return res.status(200).json(user)
    }catch(err){
        throw new Error(err)
    }
})