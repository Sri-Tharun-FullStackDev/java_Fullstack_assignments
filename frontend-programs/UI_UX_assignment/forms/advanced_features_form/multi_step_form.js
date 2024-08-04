document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', function() {
      const nextStep = this.getAttribute('data-next');
      showStep(nextStep);
    });
  });
  
  document.querySelectorAll('.prev-button').forEach(button => {
    button.addEventListener('click', function() {
      const prevStep = this.getAttribute('data-prev');
      showStep(prevStep);
    });
  });
  
  function showStep(step) {
    document.querySelectorAll('.form-step').forEach(stepElement => {
      stepElement.style.display = 'none'; // Hide all steps
    });
    document.querySelector(`.${step}`).style.display = 'block'; // Show the selected step
  }
  
  // Initially show the first step
  showStep('step-1');
  