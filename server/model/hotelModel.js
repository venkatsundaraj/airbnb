const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    hotelName:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    typeOfPlace:{
        type:String,
        required:true
    },
    userId:{
        ref:'User',
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

module.exports = mongoose.model('Hotel', hotelSchema)