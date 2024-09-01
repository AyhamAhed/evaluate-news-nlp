// js files
import { handleSubmit } from './js/formHandler';
import { checkForURL } from './js/urlChecker'; // Import the new URL validation function

// Display alerts and console messages for debugging
alert("I EXIST");
console.log("CHANGE!!");

// sass files
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// Attach event listener to the form
const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

// Function to check if the URL is valid
function checkForURL(url) {
    try {
        new URL(url); // Attempt to create a new URL object
        return true; // URL is valid
    } catch (e) {
        return false; // URL is invalid
    }
}

// Export the checkForURL function for use in formHandler.js
export { checkForURL };
