document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById('signInForm');
    const signinBtn = document.getElementById('signinBtn');

    signinBtn.addEventListener('click', function(event) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        // Clear previous error messages
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Invalid email format';
            return;
        }

        // Validate password
        if (password.trim() === '') {
            passwordError.textContent = 'Password is required';
            return;
        }

        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            return;
        }

        // If all validations pass, redirect to the desired page
        window.location.href = "index.html";
    });
});