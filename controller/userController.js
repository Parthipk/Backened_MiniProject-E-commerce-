const handler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserContact = require('../model/UserModel');
const Order = require('../model/orderModel');
const authenticationHandler = require('../middleware/authenticationHandler');


const UserController = {
    Sign: handler(async (req, res) => {
        const { username, password, address } = req.body;

        const user = await UserContact.findOne({ username });

            if (user) {
                throw new Error("User already Exicts ...");
            }

        if (!username || !password || !address) {
            throw new Error("Enter all credentials");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const signData = await UserContact.create({
            username,
            address,
            password: hashedPassword,
        });

        const payload = {
            username: signData.username,
            address: signData.address,
            id: signData._id,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET);

        res.cookie('token', token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,  // 1 day
            httpOnly: true,
            secure: false,
            sameSite: 'none',
        });

        res.json({
            message: "Sign up completed",
            username: signData.username,
            id: signData._id,
            token,
        });
    }),

    login: handler(async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            throw new Error("Credentials not entered");
        }
        if (username === 'admin' && password === password) {
            const adminUser = {
                username: 'admin',
                _id: 'admin-id',
            };
 
            const payload = {
                username: adminUser.username,
                _id: adminUser._id,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET);

            res.cookie('token', token, {
                maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
                httpOnly: true,
                secure: false,
                sameSite: 'none',
            });

            return res.json({
                message: "Admin login successful",
                username: adminUser.username,
                id: adminUser._id,
                token,
            });
        } else {
            const user = await UserContact.findOne({ username });

            if (!user) {
                throw new Error("User not found");
            }
            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                throw new Error("Incorrect password");
            }

            const payload = {
                username: user.username,
                address: user.address,
                id: user._id,
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET);

            res.cookie('token', token, {
                maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
                httpOnly: true,
                secure: false,
                sameSite: 'none',
            });

            return res.json({
                message: "Login successful",
                username: user.username,
                id: user._id,
                address: user.address,
                token,
            });
        }
    }),

  

    logout:handler (async(req,res)=>{
        res.clearCookie('token', {
            httpOnly: true,
            secure: false, 
            sameSite: 'none',
            path: '/',
        });
        res.json({
            message: "Logged out successfully",
        });
    })
    
};


module.exports = UserController;
