import { checkForURL } from './js/urlChecker'; // New file for URL validation

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
const serverURL = 'https://localhost:8000/api';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Check if the URL is valid
    if (checkForURL(formText)) {
        // If the URL is valid, send it to the server
        sendDataToServer(formText);
    } else {
        alert("Invalid URL. Please enter a valid URL.");
    }
}

// Function to check if the URL is valid
function checkForURL(url) {
    try {
        new URL(url); // Attempt to create a new URL object
        return true; // URL is valid
    } catch (e) {
        return false; // URL is invalid
    }
}

// Function to send data to the server
async function sendDataToServer(url) {
    try {
        const response = await fetch(`${serverURL}/addUrl`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        console.log('Data received from server:', data);
        // Handle the data received from the server, e.g., update the UI
    } catch (error) {
        console.error('Error sending data to server:', error);
    }
}

// Export the handleSubmit function
export { handleSubmit };
