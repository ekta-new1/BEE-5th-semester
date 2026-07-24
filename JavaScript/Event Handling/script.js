let button = document.getElementById("btn");

let input = document.getElementById("username");

let form = document.getElementById("myForm");

let error = document.getElementById("error");

// MOUSE EVENTS

// Runs when button is clicked
button.addEventListener("click", function(event) {

    // event.type tells which event occurred
    console.log("Event Type:", event.type);

    // event.target tells which element triggered the event
    console.log("Target Element:", event.target);

    console.log("Button Clicked");

    button.innerText = "Clicked!";
});

// Runs when mouse enters button
button.addEventListener("mouseover", function() {

    button.style.backgroundColor = "green";
    button.style.color = "white";

    console.log("Mouse entered button");
});

// Runs when mouse leaves button
button.addEventListener("mouseout", function() {

    button.style.backgroundColor = "";
    button.style.color = "";

    console.log("Mouse left button");
});

// KEYBOARD EVENTS

// Runs when key is pressed
input.addEventListener("keydown", function(event) {
    console.log("Key Pressed:", event.key);
});

// Runs when key is released
input.addEventListener("keyup", function() {

    console.log("Current Input:", input.value);
});

// INPUT EVENT

// Runs whenever user types
input.addEventListener("input", function() {

    console.log("Typing:", input.value);
});


// FOCUS EVENT

// Runs when input box gets focus
input.addEventListener("focus", function() {

    input.style.backgroundColor = "lightyellow";

    console.log("Input Focused");
});

// BLUR EVENT

// Runs when input box loses focus
input.addEventListener("blur", function() {

    input.style.backgroundColor = "white";

    console.log("Input Lost Focus");
});


// EXAMPLE -

// Runs when form is submitted
form.addEventListener("submit", function(event) {

    // Stops the page from refreshing
    event.preventDefault();

    console.log("Form Submitted");

    // Check if input is empty
    if(input.value === ""){

        error.innerText = "Name cannot be empty.";

    }
    else{

        error.innerText = "";

        alert("Welcome " + input.value);
    }

});