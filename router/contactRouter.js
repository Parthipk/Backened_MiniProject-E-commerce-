const express = require('express');
const contactController = require('../controller/contactController');
const LoginRoutes = express.Router();


LoginRoutes.post('/login', contactController.login);
LoginRoutes.post('/signin', contactController.Sign);
LoginRoutes.post('/logout',contactController.logout)



module.exports = LoginRoutes;
