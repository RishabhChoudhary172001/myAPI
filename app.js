const express = require('express')
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})


// middleware or to set router

app.use("/api/products",products_routes);

const start = async() =>{
    try {
       await connectDB(process.env.MONGODB_URL);
       app.listen(PORT, () => {
       console.log(`${PORT} is connected`);
       }) 
    } catch (error) {
      console.log(error);  
    }
}

start();