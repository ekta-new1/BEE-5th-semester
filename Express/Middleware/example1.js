const express = require("express")
const app = express()

// We are creating a middleware function named logger which prints message for every incoming request
const logger = (req, res, next) => {  //here, next is a parameter used to pass control to the next step.

    // Print a message in the terminal whenever a request arrives
    // req.method tells us the HTTP method (GET, POST, PUT, DELETE, etc.)
    // req.url tells us the requested URL path (/, /about, etc.)
    console.log("Request received:", req.method, req.url);

     next();  // Pass control to the next middleware or route handler

};

// Register the logger middleware for the entire application
// Every incoming request will pass through this middleware
app.use(logger);

//app.use(logger) passes the function itself to Express for registration. You do not write app.use(logger()), because Express needs to receive the middleware function rather than the result of calling it.
 
app.get("/", (req, res) => {
	res.send("Home Page")
})
 
app.get("/about", (req, res) => {
	res.send("About Page")
})
 
app.listen(8000, () => {
	console.log("Server is running in http://localhost:8000/")
})


//Browser / Postman - Requests /about

// app.use(logger) - Registers and runs the middleware

// console.log() - Prints GET /about in the terminal

// next() - Passes control to the next handler

// Route handler - Sends the response to the browser