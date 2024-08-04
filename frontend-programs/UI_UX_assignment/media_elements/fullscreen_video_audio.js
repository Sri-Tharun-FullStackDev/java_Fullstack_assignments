const video = document.getElementById('fullscreenVideo');
const fullscreenButton = document.getElementById('fullscreenButton');

fullscreenButton.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { // Firefox
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { // IE/Edge
    video.msRequestFullscreen();
  }
});
