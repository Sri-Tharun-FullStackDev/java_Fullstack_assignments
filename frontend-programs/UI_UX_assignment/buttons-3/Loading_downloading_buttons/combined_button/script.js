document.getElementById('downloadButton').addEventListener('click', function() {
    this.classList.add('loading');
    
    // Simulate a delay before triggering download
    setTimeout(() => {
      // Simulate download action
      window.location.href = this.getAttribute('href'); // Trigger the download
      this.classList.remove('loading');
    }, 3000); // Adjust delay as needed
  });
  