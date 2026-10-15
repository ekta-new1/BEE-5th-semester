// Import Express to create the server and handle API requests
const express = require("express");

const app = express(); // Create an Express application

// Import bcrypt to hash passwords and compare them during login
const bcrypt = require("bcrypt");

// Import jsonwebtoken to generate and verify JWT tokens
const jwt = require("jsonwebtoken");

// Secret key used to sign and verify JWT tokens
// In real projects, store this key in a .env file
const SECRET_KEY = "PASSKEY";

// Middleware that converts incoming JSON data into a JavaScript object(usable format)
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to homepage");
});


// Temporary storage for one user - Data will be lost when the server restarts
let user = {};


//REGISTER ROUTE 

// POST request to register a new user
// async allows us to use await inside this function
app.post("/register", async (req, res) => {

    // Extract email and password from the request body
    const { email, password } = req.body;

    // Check whether email or password is missing
    if (!email || !password) {

        // Stop execution and send HTTP status 400 (Bad Request)
        return res.status(400).send("Email and password are required");
    }

    // Store the email and hashed password in the user object
    user = {
        useremail: email,

        // Hash the password using bcrypt
        // 10 is the salt-rounds setting that controls hashing cost
        // await waits for the hash operation to finish
        userpassword: await bcrypt.hash(password, 10)
    };

    // Print the stored user details in the terminal
    // The password shown here is hashed, not the original password
    console.log(user);

    // Send a successful registration response to the client
    res.send({
        message: "User registered successfully",
        email: email
    });
});


// LOGIN ROUTE
// POST request to log in an existing user
app.post("/login", async (req, res) => {

    // Extract email and password from the request body
    const { email, password } = req.body;

    // Check whether email or password is missing
    if (!email || !password) {
        return res.status(400).send("Email and password are required");
    }

    // Check whether the entered email matches the registered email
    // !== means "not equal in value or type"
    if (email !== user.useremail) {
        return res.status(401).send("Invalid email or password");  //not valid authentication credentials.
    }

    // Compare the entered password with the stored password hash
    // bcrypt.compare() returns true if they match, otherwise false
    const check_password = await bcrypt.compare(password, user.userpassword);

    // If the password does not match, reject the login
    if (!check_password) {
        return res.status(401).send("Invalid email or password");
    }

    // Generate a JWT token after successful login
    // First argument: data to store inside the token (payload)
    // Second argument: secret key used to sign the token
    // Third argument: token options; here, it expires in one hour
    const token = jwt.sign(
        { email: email },
        SECRET_KEY,
        { expiresIn: "10h" }
    );

    // Send the success message and token to the client
    res.send({
        message: "User logged in successfully",
        token: token
    });
});


// AUTHENTICATION MIDDLEWARE
// This middleware checks whether the client has a valid JWT token
const authMiddleware = (req, res, next) => {

    // Read the Authorization header from the incoming request
    // Example: "Bearer eyJhbGciOiJIUzI1NiIs..."
    const authHeader = req.headers.authorization;

    // Check whether the header is missing or does not start with "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {

        // Reject the request if the token is missing
        return res.status(401).send("Token missing");
    }

    // Split "Bearer token" into ["Bearer", "token"]
    // [1] selects the second part, which is the actual token
    const token = authHeader.split(" ")[1];

    try {

        // Verify the token using the same secret key
        // This also checks whether the token has expired
        const decoded = jwt.verify(token, SECRET_KEY);

        // Attach the decoded token data to the request object
        // Other route handlers can now access it through req.user
        req.user = decoded;

        // Allow the request to continue to the next function
        next();

    } catch (error) {

        // Reject the request if the token is invalid or expired
        return res.status(401).send("Invalid or expired token");
    }
};


//PROTECTED PROFILE ROUTE - This route can only be accessed with a valid JWT token
// authMiddleware runs before the route handler
app.get("/profile", authMiddleware, (req, res) => {

    // Send the profile message and decoded token data
    res.send({
        message: "Profile Page",
        user: req.user
    });
});


//PROTECTED ACCOUNT ROUTE - This route also requires a valid JWT token
app.get("/account", authMiddleware, (req, res) => {
    res.send("Welcome to account page");
});

app.listen(2000, () => {
    console.log("Server is running in http://localhost:2000/");
});