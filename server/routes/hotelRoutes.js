const express = require('express')
const router = express.Router()
const hotelController = require('../controller/hotelController')
const authHandler = require('../middlewares/authHandler')


router.get('/',authHandler, hotelController.getAllHotels)
router.post('/add-hotel', authHandler, hotelController.createHotel)
router.get('/delete-hotel/:id', authHandler, hotelController.deleteHotel)
router.post('/update-hotel', authHandler, hotelController.updatedHotel)


module.exports = router