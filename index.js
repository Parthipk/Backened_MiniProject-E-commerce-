const express = require("express");
const ConnectDB = require("./db_connections/mongo");  // Make sure this path is correct
const router = require("./router");  // Import the main router
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser()); 
const port = 3000;
require('dotenv').config();

// Connect to DB
ConnectDB();

// Middleware to parse JSON request bodies
app.use(express.json());  // This is crucial for POST requests to work

// Use the routes from router.js
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
