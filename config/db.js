const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.Mongo_DB);
        console.log((`Connected`.bgBlack.blue));
    } catch (error) {
        console.log(`${error}`.red);
    }
}

// Exports mongoDB connection
module.exports = connectDB;