const modal = document.getElementById('myModal');
const openButton = document.getElementById('openModalButton');
const closeButton = document.querySelector('.close');

// Open modal
openButton.onclick = function() {
  modal.style.display = 'block';
}

// Close modal
closeButton.onclick = function() {
  modal.style.display = 'none';
}

// Close modal if outside click
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
