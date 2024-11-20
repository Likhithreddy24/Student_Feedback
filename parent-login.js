// Predefined parent credentials
const parentCredentials = {
    "parent1": "password1",
    "parent2": "password2",
    "parent3": "password3",
    "parent4": "password4",
    "parent5": "password5",
    "parent6": "password6",
    "parent7": "password7",
    "parent8": "password8",
    "parent9": "password9",
    "parent10": "password10",
    "parent11": "password11",
    "parent12": "password12",
    "parent13": "password13",
    "parent14": "password14",
    "parent15": "password15",
};

// Handle parent login
document.getElementById('parentLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const parentUsername = document.getElementById('parentUsername').value;
    const parentPassword = document.getElementById('parentPassword').value;
    const errorMessage = document.getElementById('parentError');

    if (parentCredentials[parentUsername] && parentCredentials[parentUsername] === parentPassword) {
        // Redirect to parent dashboard if login is successful
        window.location.href = "parent-dashboard.html?parent=" + parentUsername;
    } else {
        // Show error message if login fails
        errorMessage.style.display = "block";
    }
});