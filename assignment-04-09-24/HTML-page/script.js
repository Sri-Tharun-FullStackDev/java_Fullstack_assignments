document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Name is required.");
        return;
    }

    if (email === "") {
        alert("Email is required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Message is required.");
        return;
    }

    alert("Form submitted successfully!");
    // You can submit the form or perform additional actions here
});

function validateEmail(email) {
    // Simple email validation pattern
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}