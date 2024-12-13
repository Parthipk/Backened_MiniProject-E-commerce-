const handler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Inquiry = require('../model/ContactModel');

const InquiryForm = handler(async(req,res)=>{

    const {name,email,phoneNumber,message} = req.body ;

    if(!name || !email || !message){
        return res.status(400).json({ message: "Please enter all necessary details." });
    }
    
    const data = await Inquiry.create({
        name,
        email,
        phoneNumber,
        message
    })

    const payload = {
        name,
        email,
        phoneNumber,
        message
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn :'1d'
    })

    res.cookie('token',token,{
        maxAge: 1 * 24 * 60 * 60 * 1000,  // 1 day
        httpOnly: true,
        secure: false,
        sameSite: 'none',

    })


    res.json({
        message: "Contact Form Submitted",
        data: {
            name,
            email,
            phoneNumber,
            message,
            token, 
        },
    })




})

module.exports = InquiryForm