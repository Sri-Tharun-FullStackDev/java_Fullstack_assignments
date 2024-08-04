document.querySelectorAll('.gallery-image').forEach((img, index) => {
    img.addEventListener('click', function() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img src="${this.src}" class="lightbox-img">
            <a class="prev-lightbox" onclick="changeSlide(-1)">&#10094;</a>
            <a class="next-lightbox" onclick="changeSlide(1)">&#10095;</a>
        `;
        document.body.appendChild(lightbox);
        lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

let lightboxIndex = 0;

function changeSlide(n) {
    const lightboxImages = document.querySelectorAll('.gallery-image');
    lightboxIndex = (lightboxIndex + n + lightboxImages.length) % lightboxImages.length;
    const lightboxImg = document.querySelector('.lightbox-img');
    lightboxImg.src = lightboxImages[lightboxIndex].src;
}
