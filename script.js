const slidess2 = document.querySelectorAll(".slides div");
let slideIndex2 = 0;
document.addEventListener("DOMContentLoaded", initializeSlider2);

function initializeSlider2() {
    if (slidess2.length > 0) {
        showSlides2(slideIndex2);
    }
}

function showSlides2(index) {
    slideIndex2 = index % slidess2.length;
    slidess2.forEach(slide => {
        slide.classList.remove("displayslide2");
    });

    for (let i = 0; i < 8; i++) {
        const slideToShow = (slideIndex2 + i) % slidess2.length;
        slidess2[slideToShow].classList.add("displayslide2");
    }
}

function prevslide2() {
    slideIndex2 --;
    if (slideIndex2 < 0) {
        slideIndex2 = slidess2.length-1;
    }
    showSlides2(slideIndex2);
}

function nextslide2() {
    slideIndex2 ++;
    if (slideIndex2 >= slidess2.length) {
        slideIndex2 = 0;
    }
    showSlides2(slideIndex2);
}

//////////////////////////////////////////////////////////

const slidess = document.querySelectorAll(".slidesss div");
let slideIndex = 0;
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slidess.length > 0) {
        showSlides(slideIndex);
    }
}

function showSlides(index) {
    slideIndex = index % slidess.length;
    slidess.forEach(slide => {
        slide.classList.remove("displayslide");
    });

    for (let i = 0; i < 8; i++) {
        const slideToShow = (slideIndex + i) % slidess.length;
        slidess[slideToShow].classList.add("displayslide");
    }
}

function prevslide() {
    slideIndex --;
    if (slideIndex < 0) {
        slideIndex = slidess.length-1;
    }
    showSlides(slideIndex);
}

function nextslide() {
    slideIndex ++;
    if (slideIndex >= slidess.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}











