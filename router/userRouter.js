const express = require('express');
const UserController = require('../controller/userController');
const userRoutes = express.Router();


userRoutes.post('/login',UserController.login);
userRoutes.post('/signin',UserController.Sign);
userRoutes.post('/logout',UserController.logout)



module.exports = userRoutes;
