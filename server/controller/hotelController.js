const Hotel = require('../model/hotelModel')
const asyncHandler = require('express-async-handler')


exports.getAllHotels = asyncHandler(async function(req, res,next){
    try{
        const hotels = await Hotel.find()

        
        res.status(200).json(hotels)
}catch(err){
    throw new Error(err)
}
})

exports.createHotel = asyncHandler(async function(req,res,next){
    try{
        const {hotelName, description, typeOfPlace, imageUrl} = req.body

        if(!hotelName || !description || !typeOfPlace || !imageUrl){
            return res.status(403).json({message:'please enter required fields'})
        }
        
        const existedHotel = await Hotel.findOne({hotelName:hotelName, description:description, typeOfPlace:typeOfPlace, imageUrl:imageUrl})

        if(existedHotel){
            throw new Error('dont enter the existed hotel details')
        }

        const newHotel = await Hotel.create({hotelName:hotelName, description:description, typeOfPlace:typeOfPlace, imageUrl:imageUrl, userId:req.user._id})

        return res.status(200).json(newHotel)
    }catch(err){
        throw new Error(err)
    }
})

exports.deleteHotel = asyncHandler(async function(req,res,next){
    try{
       const {id} = req.params

       const isDeleted = await Hotel.findOneAndDelete({_id:id, userId:req.user._id})

       return res.status(200).json(isDeleted)
    }catch(err){
        throw new Error(err)
    }
})


exports.updatedHotel = asyncHandler(async function(req,res,next){
    try{
        const {hotelName, description, typeOfPlace, imageUrl, _id} = req.body

        if(!hotelName || !description || !typeOfPlace || !imageUrl || !_id){
            return res.status(403).json({message:'please enter required fields'})
        }

        const updatedHotel = await Hotel.findOne({_id:_id, userId:req.user._id})

        updatedHotel.hotelName = hotelName
        updatedHotel.description = description
        updatedHotel.typeOfPlace = typeOfPlace
        updatedHotel.imageUrl = imageUrl
        
        await updatedHotel.save()

        
        return res.status(200).json(updatedHotel)


    }catch(err){
        throw new Error(err)
    }
})