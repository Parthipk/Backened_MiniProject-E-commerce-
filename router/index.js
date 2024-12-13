
const express = require('express')
const LoginRoutes = require('./contactRouter')
const ContactRoutes = require('./ContactForm')
const InquiryRoutes = require('./order')


const router = express.Router()


router.use('/user',LoginRoutes)
router.use('/user',ContactRoutes)
router.use('/user',InquiryRoutes)

module.exports = router
 
