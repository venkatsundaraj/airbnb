const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const userRouter = require('./routes/userRoutes')
const errorHandler = require('./middlewares/errorHandler')
const mongoose = require('mongoose')
const hotelRouter = require('./routes/hotelRoutes')
const cors = require('cors')
const mongoDB = require('./config/db')

mongoDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use(userRouter)
app.use(hotelRouter)

app.use(errorHandler)


app.listen(PORT, ()=>console.log(`server started at ${PORT}`))

