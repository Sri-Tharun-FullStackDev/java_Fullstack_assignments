document.getElementById('loadingButton').addEventListener('click', function() {
    this.classList.add('loading');
    
    // Simulate an async operation (e.g., form submission)
    setTimeout(() => {
      this.classList.remove('loading');
    }, 3000); // 3 seconds delay
  });
  