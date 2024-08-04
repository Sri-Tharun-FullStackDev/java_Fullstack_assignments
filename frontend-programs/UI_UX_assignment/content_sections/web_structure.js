// script.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (name && email && message) {
            // Display a confirmation message
            alert(`Thank you, ${name}! Your message has been sent.`);
            
            // Optionally, clear the form
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
