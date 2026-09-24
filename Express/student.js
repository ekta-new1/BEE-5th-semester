const e = require("express");   // Importing Express framework
const fs = require("fs");       // Importing File System module

const app = e();   // Creating Express application

// Used to read JSON data sent by the client. It helps Express understand this JSON data.
app.use(e.json());
// It is called Middleware - Middleware is something that runs between receiving the request and executing the route.


// Creating GET route - means the home/root URL.
app.get("/", (req, res) => {   //request and response are 2 objects automatically provided by Express.
    res.send("Welcome to Express Application");
});


// GET /students
// Read all students from students.json file and send to client
app.get("/students", (req, res) => {

    // Read students.json file
    const data = fs.readFileSync("student.json", "utf-8");

    // When we read the file, Node initially gets it as JSON text/string so it Convert JSON string into JavaScript array
    const students = JSON.parse(data);
    //Now JavaScript can work with the data.

    // Send students to client
    res.send(students);
});


// POST /students - Used mainly to send/create new data.
// Add a new student
app.post("/students", (req, res) => {


    // Read existing students - Why? Because before adding a new student, we need to know what students already exist.
    const data = fs.readFileSync("student.json", "utf-8");

    // Convert JSON string into JavaScript array
    const students = JSON.parse(data);

    // Create new student
    const newStudent = {
        id: students.length + 1,
        ...req.body   //spread operator - It takes all the properties from req.body and adds them to newStudent object.

    //when client(browser) sends data to server, it is sent in the body of the request. So we can access it using req.body.
    };

    // Add new student to array
    students.push(newStudent);

    // Convert array to JSON and save in file. This is the reverse process of JSON.parse().
    fs.writeFileSync(
        "student.json",
        JSON.stringify(students)
    );

    // Send response after successfully adding new student
    res.send("Student Submitted Successfully");
});


// Start server
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000/");
});
