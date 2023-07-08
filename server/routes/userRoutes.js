const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/login',userController.loginHandler)
router.post('/register',userController.registerHandler)

module.exports = router