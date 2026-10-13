const express = require("express");
const app = express();

// express.json() middleware converts incoming JSON data into a JavaScript object(usable format)
app.use(express.json());

// Middleware 1: Checks whether the user has entered valid details.
const validationMiddleware = (req, res, next) => {

   // Extract email and password from the request body. This is called object destructuring.
    // It is a shorter way to write:
    // const email = req.body.email;
    // const password = req.body.password;
    const { email, password } = req.body;

    if (!email || !password) {
        return res.send("Enter Credentials first");
    }

    else if (!email.includes("@") || !email.endsWith(".com")) {
        return res.send("Enter Valid Email");
    }

    else {
        console.log("User is getting validated"); 
        next(); // Allow the request to move to the next middleware.
    }
};

// Middleware 2: Checks whether the login details are correct.
const authMiddleware = (req, res, next) => {

    const { email, password } = req.body;

    // These are the correct credentials for this example.
    const useremail = "user@gmail.com";
    const userpassword = "123";

    // Compare the entered details with the correct credentials.
    if (email == useremail && password == userpassword) {
        // If both match, continue to the next step.
        next();
    }
    else {
        // If either detail is incorrect, send an error response.
        return res.status(400).send("Please enter valid email and password");
//res.status(400).send() is used in Express.js to send a response to the client with HTTP status code 400 (Bad Request).        
    }
};

// Route for the homepage.
app.get("/", (req, res) => {
    res.send("Welcome to homepage");
});

app.post("/profile", validationMiddleware, authMiddleware, (req, res) => {
    res.send("Welcome to my profile page");
});

// Route for the contact page.
app.get("/contact", (req, res) => {
    res.send("Welcome to contact page");
});


app.listen(8000, () => {
    console.log("Server is running at http://localhost:8000/");
});
