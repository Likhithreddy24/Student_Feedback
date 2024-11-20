// Predefined teacher credentials
const teacherCredentials = {
    "teacher1": "password1",
};

// Handle teacher login
document.getElementById('teacherLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const teacherUsername = document.getElementById('teacherUsername').value;
    const teacherPassword = document.getElementById('teacherPassword').value;
    const errorMessage = document.getElementById('teacherError');

    if (teacherCredentials[teacherUsername] && teacherCredentials[teacherUsername] === teacherPassword) {
        // Redirect to teacher dashboard if login is successful
        window.location.href = "teacher-dashboard.html?teacher=" + teacherUsername;
    } else {
        // Show error message if login fails
        errorMessage.style.display = "block";
    }
});