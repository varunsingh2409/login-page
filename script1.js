// Login form event
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailOrUsername = document.getElementById("emailOrUsername").value;
    const password = document.getElementById("password").value;

    if (emailOrUsername && password) {
        alert("Login successful!");
    } else {
        alert("Please enter both email/username and password.");
    }
});
