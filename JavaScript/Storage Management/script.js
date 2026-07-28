const output = document.getElementById("output");

// Save name and age permanently in Local Storage
function saveLocal() {

    // Get values entered by the user
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Store each value using a unique key
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    output.innerHTML = "Student saved in Local Storage.";
}

// Save current user's name temporarily in Session Storage
function saveSession() {

    // Get the entered name
    const name = document.getElementById("name").value;

    // Store the name for the current browser tab only
    sessionStorage.setItem("currentUser", name);

    output.innerHTML = "User saved in Session Storage.";
}

// Display data stored in both Local Storage and Session Storage
function showData() {

    // Read values from Local Storage
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");

    // Read value from Session Storage
    const currentUser = sessionStorage.getItem("currentUser");

    let message = "";

    // Check whether Local Storage contains data
    if (name !== null && age !== null) {

        message += "LOCAL STORAGE\n";
        message += "Name : " + name + "\n";
        message += "Age : " + age + "\n\n";

    } else {

        message += "No data found in Local Storage.\n\n";
    }

    // Check whether Session Storage contains data
    if (currentUser !== null) {

        message += "SESSION STORAGE\n";
        message += "Current User : " + currentUser;

    } else {

        message += "No data found in Session Storage.";
    }

    // Show the final message on the webpage
    output.innerHTML = message;
}

// Remove only Local Storage data
function removeLocal() {

    // Delete the "name" key
    localStorage.removeItem("name");

    // Delete the "age" key
    localStorage.removeItem("age");

    output.innerHTML = "Local Storage data removed.";
}

// Remove only Session Storage data
function removeSession() {

    // Delete the current user's name
    sessionStorage.removeItem("currentUser");

    output.innerHTML = "Session Storage data removed.";
}

// Remove everything from both Local Storage and Session Storage
function clearAll() {

    // Delete all Local Storage data
    localStorage.clear();

    // Delete all Session Storage data
    sessionStorage.clear();

    output.innerHTML = "All Browser Storage Cleared.";
}