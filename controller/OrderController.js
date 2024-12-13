const handler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Order = require('../model/orderModel');


const OrderController= {


    placeOrder: handler(async (req, res) => {  
        const { product, quantity } = req.body;
        const user = req.user;
        if (!product || !quantity) {
            return res.status(400).send("Product and quantity are required.");
        }
        const newOrder = await Order.create({
            userId: user._id,  
            product,
            quantity  
        });
    
        res.json({
            message: `Order placed successfully for ${user.username}`,
            order: { product, quantity}
        });
    }),



}

module.exports = OrderController