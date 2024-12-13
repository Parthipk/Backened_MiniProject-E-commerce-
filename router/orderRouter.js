const express = require('express');
const authenticationHandler = require('../middleware/authenticationHandler');
const OrderController = require('../controller/OrderController');
const OrderRoutes = express.Router()

OrderRoutes.post('/order',authenticationHandler,OrderController.placeOrder)


module.exports = OrderRoutes