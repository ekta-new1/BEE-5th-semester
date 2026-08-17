// GET REQUEST -
// Get / Read users from the API

async function getUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
//It is the address of a fake/practice REST API called JSONPlaceholder.
//Communicate with this server securely using HTTPS.
//jsonplaceholder.typicode.com/users is the domain/server address. 
//It tells your browser where the API server is located.

    const data = await response.json();

    console.log("GET Response:");
    console.log(data);
}

// POST REQUEST -
// Create a new user

async function createUser() {

    const user = {
        name: "Ekta",
        email: "ekta@gmail.com"
    };

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST", // Tells the server that we want to create/send new data.

            headers: {
                "Content-Type": "application/json"  // Tells the server that the data we are sending is in JSON format.
            },

            body: JSON.stringify(user)  // Converts the JavaScript object into JSON format and sends it to the server.
        }
    );

    const data = await response.json();

    console.log("POST Response:");
    console.log(data);
}


// PUT REQUEST
// Update the complete user

async function updateUser() {

    const user = {
        name: "Ekta Updated",
        username: "ekta_updated",
        email: "updated@gmail.com"
    };

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)
        }
    );

    const data = await response.json();

    console.log("PUT Response:");
    console.log(data);
}

// PATCH REQUEST
// Update only part of the user

async function patchUser() {

    const user = {
        name: "Ekta Patched"
    };

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)
        }
    );

    const data = await response.json();

    console.log("PATCH Response:");
    console.log(data);
}

// DELETE REQUEST
// Delete a user

async function deleteUser() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
            method: "DELETE"
        }
    );

    console.log("DELETE Response:");
    console.log("User Deleted");
}