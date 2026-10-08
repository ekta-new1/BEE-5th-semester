const e = require("express");   // Importing Express framework
const fs = require("fs");       // Importing File System module

const app = e();   // Creating Express application

// Used to read JSON data sent by the client(browser). It helps Express understand this JSON data.
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

    // When we read the file, Node initially gets it as JSON text/string so it
    //  Convert JSON string into JavaScript array
    const students = JSON.parse(data);
    //Now JavaScript can work with the data.

    // Send students to client
    res.send(students);
});

app.get("/students/:id", (req, res) => {  //Here :id is a route parameter
  // Read student data from JSON file
  const data = fs.readFileSync("student.json", "utf-8");

  // Convert JSON string into JavaScript array
  const students = JSON.parse(data);

  // Get ID from URL and convert it to number
  const id = Number(req.params.id);  //Express takes the 2(id) from the URL and stores it in req.params.id
 // It is a string, not a number so Number() converts it.

  // Find student whose ID matches the URL ID
  const student = students.find((s) => s.id === id);   //find()returns the actual element
// Here s represents one student at a time which it takes from students js array which we converted above.
// s.id accesses the student's id.

  // If student doesn't exist, send message
  if (!student) {
    return res.send("Student Not Found");
  }

  // Send the found student as response
  res.send(student);
});

app.put("/students/:id", (req, res) => {
  const data = fs.readFileSync("student.json", "utf-8");
  const students = JSON.parse(data);  //usable format(js array)
 
  const id = Number(req.params.id);
  //In Express.js, req.params.id is used to get a value from the URL path parameter.

  const index = students.findIndex((s) => s.id === id); 
  //findIndex() returns the index of the element in the array. If not found, it returns -1.
 
  if (index === -1) {   //If findIndex() cannot find anything, it returns -1
    return res.send("Student Not Found");  
  }
 
  // Update the student data with the new data from req.body
  students[index] = {
    ...students[index],   //we are copying all the properties of that object using ...(spread operator)
    ...req.body
  };
 
  fs.writeFileSync(
    "student.json",
    JSON.stringify(students) //again converting back to JSON format to write in file.
  );
  res.send("Student Updated Successfully");
});

app.delete("/students/:id", (req, res) => {
  const data = fs.readFileSync("student.json", "utf-8");
  const students = JSON.parse(data);
 
  const id = Number(req.params.id);
  ////In Express.js, req.params.id is used to get a value from the URL path parameter.
  
  const index = students.findIndex((s) => s.id === id);
 
  if (index === -1) {
    return res.send("Student Not Found");
  }
 
  students.splice(index, 1);
//means remove 1 student from the students array, starting at the position stored in index.
//array.splice(start, deleteCount);  
 
  fs.writeFileSync(
    "student.json",
    JSON.stringify(students)
  );
 
  res.send("Student Deleted Successfully");
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
        ...req.body   // ... is the spread operator - It takes all the properties from 
        //req.body and adds them to newStudent object.

    //when client(browser) sends data to server, 
    // it is sent in the body of the request. So we can access it using req.body.
    };

    // Add new student to array
    students.push(newStudent);

    fs.writeFileSync(
        "student.json",
        JSON.stringify(students)  
//Convert array to JSON & save in file. This is reverse process of JSON.parse().        
    );

    // Send response after successfully adding new student
    res.send("Student Submitted Successfully");
});

// Start server
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000/");
});
