const mongoose = require("mongoose");

// Define the structure of a student
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  course: {
    type: String,
    required: true
  }
});

// Create a model using the schema
const Student = mongoose.model("Student", studentSchema);
//means we are creating a Mongoose model named Student using the structure defined in studentSchema.

module.exports = Student;


//What does this code do?
// - mongoose.Schema() defines the structure of a student record.
// - type: String means the field stores text.
// - type: Number means the field stores a number.
// - required: true means the field must be supplied.
// - mongoose.model() creates the Student model, which Mongoose normally maps to the students collection.
// - module.exports allows server.js to use the model.


// For example, a student record will look like this:
// {
//   "name": "Aman",
//   "age": 21,
//   "course": "MERN"
// }

// MongoDB will also generate an _id for the record.
