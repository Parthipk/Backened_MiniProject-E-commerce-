const express = require('express');
const contactController = require('../controller/contactController');
const InquiryForm = require('../controller/InquiryForm');

const ContactRoutes= express.Router()

ContactRoutes.post('/contact',InquiryForm)


module.exports = ContactRoutes