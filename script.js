const slidess2 = document.querySelectorAll(".slides div");
let slideIndex2 = 0;
document.addEventListener("DOMContentLoaded", initializeSlider2);

function initializeSlider2() {
    if (slidess2.length > 0) {
        showSlides2(slideIndex2);
        setInterval(nextslide2, 3000); 
    }
}

function showSlides2(index) {
    slideIndex2 = index % slidess2.length;
    slidess2.forEach(slide => {
        slide.classList.remove("displayslide2");
    });

    for (let i = 0; i < 3; i++) {
        const slideToShow = (slideIndex2 + i) % slidess2.length;
        slidess2[slideToShow].classList.add("displayslide2");
    }
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
        setInterval(nextslide, 3000); 
    }
}

function showSlides(index) {
    slideIndex = index % slidess.length;
    slidess.forEach(slide => {
        slide.classList.remove("displayslide");
    });

    for (let i = 0; i < 4; i++) {
        const slideToShow = (slideIndex + i) % slidess.length;
        slidess[slideToShow].classList.add("displayslide");
    }
}

function nextslide() {
    slideIndex ++;
    if (slideIndex >= slidess.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}



document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar__toggle");
    const menuLinks = document.querySelector(".navbar__links");

    toggleButton.addEventListener("click", () => {
        menuLinks.classList.toggle("active");
    });
});
