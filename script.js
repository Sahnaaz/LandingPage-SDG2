let slideIndex = 0;
let lastSlideTimer = false;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    // Reset back to first slide after all slides are shown
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Highlight the correct dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";

    // Wait for 30 seconds on the last slide
    if (slideIndex === slides.length) {
        if (!lastSlideTimer) {
            lastSlideTimer = true;
            setTimeout(showSlides, 30000);  // Wait for 30 seconds on the last slide
        }
    } else {
        setTimeout(showSlides, 3000);  // 3-second delay for other slides
    }
}
