document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const password = document.getElementById('password').value.trim();

    const validationMessages = [];

    if (!firstName) {
        validationMessages.push("First Name is required.");
    }

    if (!lastName) {
        validationMessages.push("Last Name is required.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        validationMessages.push("Please enter a valid email address.");
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        validationMessages.push("Phone Number must be a valid 10-digit number.");
    }

    if (password.length < 8) {
        validationMessages.push("Password must be at least 8 characters long.");
    }

    const errorMessagesContainer = document.getElementById('error-messages');
    errorMessagesContainer.innerHTML = ""; 

    if (validationMessages.length > 0) {
        validationMessages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            errorMessagesContainer.appendChild(messageElement);
        });
        return;
    }

    const formData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email: email,
        password: password
    };
    console.log(formData);
    
    document.getElementById('sign-up-form').reset(); 
});


// navbar toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    navLinks.classList.toggle('show');
    authButtons.classList.toggle('show');
  }
  

// AOS animation
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,
    });
});
  