const express = require('express');
const ContactController = require('../controller/contactController');
const ContactRoutes= express.Router()


ContactRoutes.post('/contact',ContactController.ContactForm)


module.exports = ContactRoutes