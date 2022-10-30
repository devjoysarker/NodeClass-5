
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const colors = require("colors");

// Database connection
const connectDB = require('./config/db');


// Environment variables init
const PORT = process.env.SERVER_PORT;

// Requesting body init

app.use (express.json());
app.use(express.urlencoded({
    extended : false
}));

// Student Route use
app.use('/api/students',require('./router/Student'));
app.use('/api/admins',require('./router/Admin'));

// MongoDB Connection init
connectDB()

// And Express server listener with Port
app.listen(PORT, () => console.log(`server is runing on ${PORT} port`));