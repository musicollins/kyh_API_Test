const express = require("express");
const PORT = process.env.PORT || '3500';

const app= express();

/**
 * Middleware
 */
app.use(express.json())
app.use(express.urlencoded({extended:false}));


/**
 * Start Listening
 */

app.listen(PORT, ()=>{
    console.log(`I'm waiting for requests on port ${PORT}`)
})