document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageDiv.classList.add('hidden');

        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // If valid, show success message
        if (isValid) {
            messageDiv.textContent = 'Form submitted successfully!';
            messageDiv.classList.remove('hidden');
            form.reset(); // Reset the form
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});