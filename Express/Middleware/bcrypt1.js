// Import Express - Express helps us create a server and API routes.
const express = require("express");

// Create an Express application - We will use "app" to define routes and start the server.
const app = express();

// Import bcrypt(package - hashing algo) - bcrypt helps us hash passwords and compare passwords safely.
const bcrypt = require("bcrypt");


// This middleware reads & converts JSON data into a JavaScript object.(usable format)
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to homepage");
});


// This empty object stores the registered user's details.
// It is temporary because the data is stored in memory, not in a database such as MySQL or MongoDB.
let user = {};

// async allows us to use await inside this function.
// We need it because bcrypt.hash() works asynchronously (takes time).
app.post("/register", async (req, res) => {

    // Extract email and password from the request body. This is called object destructuring.
    // It is a shorter way to write:
    // const email = req.body.email;
    // const password = req.body.password;
    const { email, password } = req.body;

    // Save the email and hashed password in our object.
    user = {

        // Store the email entered by the user(postman).
        useremail: email,

        // Convert the original password into a hash.
        // await waits for the hash result before storing it.
        // 10 is the bcrypt cost factor (salt rounds).
        userpassword: await bcrypt.hash(password, 10)
    };

    // JSON.stringify() converts the object into a string.
    res.send(`${JSON.stringify(user)} registered successfully`);
    console.log("User registered successfully");
});


// async is needed because bcrypt.compare() is asynchronous(takes time).
app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    if (email !== user.useremail) {

        // If the email does not match, send a response and stop executing the rest of this function.
        return res.send("Email does not exists");
    }

    // Compare the entered password with the stored hash.
    // bcrypt.compare() returns true if they match,
    // or false if they do not match.
    const check_user = await bcrypt.compare(password, user.userpassword);

    if (!check_user) {
        console.log("Password doesn't match");

        // Send the response and stop the function.
        return res.send("Password doesn't match");

    } else {
        res.send("User Logged In Successfully");
        console.log("User Logged In Successfully");
    }
});


// Start the server on port 1000 - The callback function runs when the server starts.
app.listen(1000, () => {
    console.log("Server is running at http://localhost:1000/");
});
