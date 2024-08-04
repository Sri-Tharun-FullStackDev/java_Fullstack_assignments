document.addEventListener('DOMContentLoaded', function() {
    const magnifier = document.createElement('div');
    magnifier.classList.add('magnifier');
    document.querySelector('.magnifier-container').appendChild(magnifier);
  
    const image = document.querySelector('#magnifier-image');
  
    magnifier.addEventListener('mousemove', function(e) {
      const { offsetX, offsetY } = e;
      const { width, height } = image;
  
      const x = offsetX / width * 100;
      const y = offsetY / height * 100;
  
      magnifier.style.backgroundImage = `url(${image.src})`;
      magnifier.style.backgroundPosition = `-${x}% -${y}%`;
      magnifier.style.left = `${e.pageX - magnifier.offsetWidth / 2}px`;
      magnifier.style.top = `${e.pageY - magnifier.offsetHeight / 2}px`;
    });
  });
  