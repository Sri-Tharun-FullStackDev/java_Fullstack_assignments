function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let modalSlideIndex = 1;
showSlides(modalSlideIndex);

function plusSlides(n) {
    showSlides(modalSlideIndex += n);
}

function currentSlide(n) {
    showSlides(modalSlideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {modalSlideIndex = 1}
    if (n < 1) {modalSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[modalSlideIndex-1].style.display = "block";
}
