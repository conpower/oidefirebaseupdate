import { ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
// Import the Firebase database from the separate firebaseConfig file
import { database } from './firebaseConfig.js'; // Adjust the path if needed
// Define database reference for '/contacts' node
const myDBCxn = ref(database, '/contacts');



// Get reference to the submit button
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

// Function to handle saving contacts
function saveContacts(event) {
    event.preventDefault();  // Prevent form submission from reloading the page
    alert("SUBMIT clicked!!!");

    // Get the email value from the input field
    const email = document.getElementById("email").value;

    // Push new contact information to Firebase
    push(myDBCxn, { email: email })
        .then(() => {
            alert("Contact saved successfully!");
            document.getElementById("email").value = "";  // Clear the input field
        })
        .catch((error) => {
            alert("Failed to save contact: " + error.message);
        });
}

// Code to retrieve and display the data goes here ...
onChildAdded(myDBCxn, (data) => {
    const datapoint = data.val();
    const contactsElement = document.getElementById("contacts");

    // Check if the contacts display element exists, and create it if it doesn't
    if (!contactsElement) {
        const displayArea = document.createElement("textarea");
        displayArea.id = "contacts";
        displayArea.rows = 10;
        displayArea.cols = 30;
        document.body.appendChild(displayArea);
    }

    // Append new contact data to the display area
    document.getElementById("contacts").value += datapoint.email + "\n";
});
