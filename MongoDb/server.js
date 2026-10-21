// Load environment variables from the .env file.
// This allows us to access PORT and MONGO_URI using process.env.
require("dotenv").config();

// Import Express to create our server and API routes.
const express = require("express");

// Import Mongoose(library) to connect to MongoDB and work with database data.
const mongoose = require("mongoose");

// Import the Student model that defines the structure of student data.
const Student = require("./Student");

// Create an Express application.
const app = express();

// Middleware: Convert incoming JSON request data into a JavaScript object.
// Without this, req.body may be undefined when we send JSON from Postman.
app.use(express.json());

/*
  CONNECT TO MONGODB ATLAS

  process.env.MONGO_URI reads the connection string from the .env file.

  .connect() establishes a connection to MongoDB.
  .then() runs when the connection is successful.
  .catch() runs if the connection fails.
*/
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas connected successfully");

    // Start the server only after MongoDB connects successfully.
    // Use the PORT from .env; if it is missing, use 1001.
    app.listen(process.env.PORT || 1001, () => {
      console.log(`Server running on port ${process.env.PORT || 1001}`);
    });
  })
  .catch((error) => {
    // Display the reason if the database connection fails.
    console.log("Database connection failed:", error.message);
  });


// TEST ROUTE
// GET /
// When someone opens the root URL, send a simple message.
app.get("/", (req, res) => {
  // res.send() sends a response back to the client/browser.
  res.send("Student Management API is working!");
});


// CREATE: Add a new student
// Method: POST
// URL: http://localhost:1001/students
app.post("/students", async (req, res) => {
  try {
    /*
      req.body contains the student data sent by Postman.

      Student.create() creates a new student document in MongoDB.
      await waits for the database operation to finish.

      async allows us to use await inside this function.
    */
    const student = await Student.create(req.body);

    // 201 means a new resource was created successfully.
    // json() sends the created student's details as JSON.
    res.status(201).json(student);
  } catch (error) {
    // 400 means the request contains invalid data,
    // for example, a required field is missing.
    res.status(400).json({ message: error.message });
  }
});


// READ: Get all students
// Method: GET
// URL: http://localhost:1001/students
app.get("/students", async (req, res) => {
  try {
    // Student.find() retrieves all student documents from MongoDB.
    const students = await Student.find();

    // 200 means the request was successful.
    // Return all students as a JSON array.
    res.status(200).json(students);
  } catch (error) {
    // 500 means an unexpected server-side error occurred.
    res.status(500).json({ message: error.message });
  }
});


// READ: Get one student using their MongoDB ID
// Method: GET
// URL: http://localhost:1001/students/STUDENT_ID
app.get("/students/:id", async (req, res) => {
  try {
    /*
      :id is a route parameter.
      req.params.id reads the ID from the URL.

      Example:
      /students/68abc123...
      req.params.id contains "68abc123..."

      findById() searches MongoDB for that document.
    */
    const student = await Student.findById(req.params.id);

    // If the ID is valid but no student exists with that ID,
    // return 404 (Not Found).
    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    // If found, return the student's details.
    res.status(200).json(student);
  } catch (error) {
    // For example, the supplied ID may not be a valid MongoDB ID.
    res.status(400).json({
      message: "Invalid student ID"
    });
  }
});


// UPDATE: Update a student's details
// Method: PATCH
// URL: http://localhost:1001/students/STUDENT_ID
app.patch("/students/:id", async (req, res) => {
  try {
    /*
      findByIdAndUpdate() finds a student by ID and updates the document.

      First argument: ID of the student to update.
      Second argument: fields and values to update.
      $set: changes only the fields provided in req.body.
      Third argument contains options:
        new: true returns the updated document.
        runValidators: true checks updated values against the schema.
    */
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true
      }
    );

    // If no student exists with this ID, return 404.
    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    // Return the updated student details.
    res.status(200).json(student);
  } catch (error) {
    // Return an error if the ID or updated data is invalid.
    res.status(400).json({ message: error.message });
  }
});


// DELETE: Delete a student
// Method: DELETE
// URL: http://localhost:1001/students/STUDENT_ID
app.delete("/students/:id", async (req, res) => {
  try {
    /*
      findByIdAndDelete() searches for a student by ID
      and permanently deletes that document from MongoDB.
    */
    const student = await Student.findByIdAndDelete(
      req.params.id
    );

    // If the student does not exist, return 404.
    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    // Tell the client that deletion was successful.
    res.status(200).json({
      message: "Student deleted successfully"
    });
  } catch (error) {
    // Return an error if the supplied ID is invalid.
    res.status(400).json({
      message: "Invalid student ID"
    });
  }
});
