// firebaseConfig.js

// Import the necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs2U03m5djvDotOdqzZ1RRysUN5whi2HM",
    authDomain: "my-demo-project-d4870.firebaseapp.com",
    databaseURL: "https://my-demo-project-d4870-default-rtdb.firebaseio.com",
    projectId: "my-demo-project-d4870",
    storageBucket: "my-demo-project-d4870.appspot.com",
    messagingSenderId: "441895324402",
    appId: "1:441895324402:web:398fa62eaab443559ede6b",
    measurementId: "G-7SV5T1FLVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export the database so it can be used in other files
export { database };
