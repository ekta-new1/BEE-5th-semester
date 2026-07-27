const form = document.getElementById("registrationForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

const successMessage = document.getElementById("successMessage");

// Runs whenever the user types in the Name field
name.addEventListener("input", function () {

    console.log("Name:", name.value);

});

// Runs whenever the user types in the Email field
email.addEventListener("input", function () {

    console.log("Email:", email.value);

});

// Runs whenever the user types in the Age field
age.addEventListener("input", function () {

    console.log("Age:", age.value);

});

// Runs when the form is submitted
form.addEventListener("submit", function(event){

    // Stops the browser from refreshing the page
    event.preventDefault();

    // Remove previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    successMessage.textContent = "";

    // Variable to track whether the form is valid
    let isValid = true;

    // Validate Name
    if(name.value.trim() === ""){

        nameError.textContent = "Name is required";
        isValid = false;

    }

    // Validate Email
    if(email.value.trim() === ""){

        emailError.textContent = "Email is required";
        isValid = false;

    }
    else if(!email.value.includes("@")){

        emailError.textContent = "Enter a valid email";
        isValid = false;

    }

    // Validate Age
    if(age.value === ""){

        ageError.textContent = "Age is required";
        isValid = false;

    }
    else if(Number(age.value) < 18){

        ageError.textContent = "Age must be 18 or above";
        isValid = false;

    }

    // Display success message if validation passes
    if(isValid){

        successMessage.textContent = "Registration Successful!";

        console.log("Name:", name.value);
        console.log("Email:", email.value);
        console.log("Age:", age.value);

    }

});