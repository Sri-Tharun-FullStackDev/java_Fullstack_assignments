const popup = document.getElementById('popup');
const showPopupButton = document.getElementById('showPopupButton');
const popupClose = document.querySelector('.popup-close');

// Show popup
showPopupButton.onclick = function() {
  popup.style.display = 'block';
}

// Close popup
popupClose.onclick = function() {
  popup.style.display = 'none';
}

// Close popup if outside click
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
}
