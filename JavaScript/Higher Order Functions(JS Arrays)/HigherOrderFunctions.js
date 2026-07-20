// Array of Student Objects
const students = [
    { name: "Ekta", marks: 90 },
    { name: "Rahul", marks: 75 },
    { name: "Aman", marks: 85 },
    { name: "Priya", marks: 60 }
];

console.log("Original Student Data:");
console.log(students);


// 1. map()

console.log("\n========== map() ==========");

// map() creates a NEW array by transforming each element.

const names = students.map((student) => {
    return student.name;
});

console.log("Student Names:");
console.log(names);

/*
Output: ['Ekta', 'Rahul', 'Aman', 'Priya']
*/


// 2. filter()
console.log("\n========== filter() ==========");

// filter() returns only those elements
// that satisfy the given condition.

const toppers = students.filter((student) => {
    return student.marks > 80;
});

console.log("Students Scoring More Than 80:");
console.log(toppers);

/*
Output:
[
 { name: 'Ekta', marks: 90 },
 { name: 'Aman', marks: 85 }
]
*/


// 3. reduce()
console.log("\n========== reduce() ==========");

// reduce() converts the whole array
// into a single value.

const totalMarks = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0);

console.log("Total Marks:");
console.log(totalMarks);

/*
Dry Run

Initial sum = 0

Student 1
sum = 0
marks = 90
0 + 90 = 90

Student 2
sum = 90
marks = 75
90 + 75 = 165

Student 3
sum = 165
marks = 85
165 + 85 = 250

Student 4
sum = 250
marks = 60
250 + 60 = 310

Final Answer = 310
*/


// 4. sort()

console.log("\n========== sort() ==========");

// Sort students in descending order of marks

students.sort((a, b) => {
    return b.marks - a.marks;
});

console.log("Students Sorted by Marks (Highest to Lowest):");
console.log(students);

/*
Comparison Examples

Ekta(90) vs Rahul(75)

75 - 90 = -15
Negative
=> Ekta stays before Rahul


Aman(85) vs Rahul(75)

75 - 85 = -10
Negative
=> Aman stays before Rahul


Priya(60) vs Aman(85)

85 - 60 = 25
Positive
=> Aman comes before Priya


Final Sorted Order

Ekta   90
Aman   85
Rahul  75
Priya  60
*/


// Summary

console.log("\n========== Summary ==========");

console.log("map()    -> Creates a NEW transformed array.");
console.log("filter() -> Returns elements satisfying a condition.");
console.log("reduce() -> Converts the array into one value.");
console.log("sort()   -> Rearranges the array.");