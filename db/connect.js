require("dotenv").config();
const mongoose = require('mongoose');
const { options } = require('../routes/products');

const connectDB = (uri) =>{
    console.log("connect to the database");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;