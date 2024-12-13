const express = require('express');
const authenticationHandler = require('../middleware/authenticationHandler');
const contactController = require('../controller/contactController');
const InquiryRoutes = express.Router()

InquiryRoutes.post('/order',authenticationHandler,contactController.placeOrder)


module.exports = InquiryRoutes