const express = require("express");
const ConnectDB = require("./db_connections/mongo");
const router = require("./router"); 
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser()); 
const port = 3000;
require('dotenv').config();

ConnectDB();

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
