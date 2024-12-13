
const express = require('express')
const userRoutes = require('./userRouter')
const OrderRoutes = require('./orderRouter')
const ContactRoutes = require('./contactRouter')


const router = express.Router()


router.use('/user',userRoutes)
router.use('/user',ContactRoutes)
router.use('/user',OrderRoutes)

module.exports = router
 
