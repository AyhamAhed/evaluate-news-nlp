function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    // Remove leading/trailing whitespace
    inputText = inputText.trim();

    // Check if the input is empty
    if (inputText.length === 0) {
        alert("Input cannot be empty. Please enter a valid name.");
        return false;
    }

    // Check if the input is too short or too long
    if (inputText.length < 2 || inputText.length > 50) {
        alert("Name must be between 2 and 50 characters.");
        return false;
    }

    // Regex to allow only letters, spaces, and hyphens
    const namePattern = /^[a-zA-Z\s-]+$/;

    if (!namePattern.test(inputText)) {
        alert("Name can only contain letters, spaces, and hyphens.");
        return false;
    }

    alert("Valid name entered.");
    return true;
}

export { checkForName };
