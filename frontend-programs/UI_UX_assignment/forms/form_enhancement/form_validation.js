document.getElementById('validationForm').addEventListener('submit', function(event) {
    if (!this.checkValidity()) {
      event.preventDefault(); // Prevent form submission if validation fails
      alert('Please fill out the form correctly.');
    }
  });
  