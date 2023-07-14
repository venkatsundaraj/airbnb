const mongoose = require('mongoose')

const mongoDB = async function(){
    try{
       
         const connect = await mongoose.connect(process.env.MONGO_URI)

         console.log(`server connected at ${process.env.PORT}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}


module.exports = mongoDB