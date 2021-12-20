const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors");
dotenv.config({path: '.env'})
const PORT = process.env.PORT || '3500';
const app = express();

/**
 * Middleware
 */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));

/**
 * Routes
 */

app.get('/',(req, res)=>{
    res.status(200).send("Navigate to /products")

});

const productRoutes = require('./routes/products');
app.use("/products", productRoutes) 

/**
 * Start Listening
 */
app.listen(PORT, ()=>{
    console.log(`I'm waiting for requests on port ${PORT}`)
})