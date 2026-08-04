// ES6 FEATURES DEMONSTRATION PROGRAM

// 1. TEMPLATE LITERALS

console.log("TEMPLATE LITERALS DEMONSTRATION");

// Create two variables
let studentName = "Ekta";
let course = "JavaScript";

// Use backticks (` `) and ${} to insert variables
console.log(`Hello ${studentName}, welcome to ${course} course.`);

// Multi-line string using template literals
let message = `
This is JavaScript.
It supports
multiple lines
without using \\n.
`;

console.log(message);


// 2. SPREAD OPERATOR (...)

console.log(" SPREAD OPERATOR DEMONSTRATION");

// Original array
let marks1 = [80, 85, 90];

// Spread operator expands array elements
console.log(...marks1);

// Copy an array
let copiedMarks = [...marks1];

console.log("Copied Array:");
console.log(copiedMarks);

// Merge two arrays
let marks2 = [95, 100];

let allMarks = [...marks1, ...marks2];

console.log("Merged Array:");
console.log(allMarks);

// 3. REST OPERATOR (...)

console.log("REST OPERATOR DEMONSTRATION");

// Rest operator collects all values into one array
function displayMarks(...marks)
{
    console.log("Marks Received:");
    console.log(marks);
}

displayMarks(75, 80, 85, 90, 95);


// Another example
function studentDetails(name, age, ...subjects)
{
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Subjects:", subjects);
}

studentDetails("Rahul", 20, "Java", "HTML", "CSS", "JavaScript");

// 4. DESTRUCTURING

console.log("DESTRUCTURING DEMONSTRATION");

// Array Destructuring
let colors = ["Red", "Blue", "Green"];

// Store array values into separate variables
let [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


// Object Destructuring
let student = {
    name: "Aman",
    age: 21,
    city: "Lucknow"
};

// Extract object properties into variables
let { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);

// 5. DEFAULT PARAMETERS

console.log("DEFAULT PARAMETERS DEMONSTRATION");

// If user does not pass values,
// default values will be used.
function greet(name = "Guest")
{
    console.log(`Hello ${name}`);
}

greet();          // Uses default value
greet("Ekta");    // Uses provided value


// Another example
function calculateBill(price = 100, quantity = 1)
{
    let total = price * quantity;

    console.log(`Price: ${price}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Total Bill = ${total}`);
}

calculateBill();

calculateBill(250, 3);

// COMBINED EXAMPLE
console.log("===== COMBINED EXAMPLE =====");

// Default parameter
function showStudent(name = "Unknown", ...skills)
{
    // Template Literal
    console.log(`Student Name: ${name}`);

    // Rest Operator
    console.log("Skills:");
    console.log(skills);

    // Spread Operator
    let extraSkills = ["React", "Node.js"];

    let allSkills = [...skills, ...extraSkills];

    console.log("All Skills:");
    console.log(allSkills);

    // Destructuring
    let [skill1,, skill2] = allSkills;

    console.log(`First Skill: ${skill1}`);
    console.log(`Second Skill: ${skill2}`);
}

showStudent("Rahul","HTML","CSS","JavaScript");