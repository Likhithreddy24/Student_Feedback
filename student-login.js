// Predefined list of student credentials (username: password)
const studentCredentials = {
    "student1": "password1",
    "student2": "password2",
    "student3": "password3",
    "student4": "password4",
    "student5": "password5",
    "student6": "password6",
    "student7": "password7",
    "student8": "password8",
    "student9": "password9",
    "student10": "password10",
    "student11": "password11",
    "student12": "password12",
    "student13": "password13",
    "student14": "password14",
    "student15": "password15",
};

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if username and password match the predefined credentials
    if (studentCredentials[username] && studentCredentials[username] === password) {
        // Redirect to student dashboard if login is successful
        window.location.href = "student-dashboard.html?username=" + username;
    } else {
        // Display error message if login fails
        errorMessage.style.display = "block";
    }
});