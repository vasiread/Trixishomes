document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".testimonial-profiles");
    const cards = document.querySelectorAll(".individual-testimonials");
    const wrapper = document.querySelector(".testimonial-slider-wrapper");

    let currentIndex = 0;

    const getVisibleCards = () => window.innerWidth <= 720 ? 1 : 2;
    const getCardWidth = () => cards[0].offsetWidth;
    const getGap = () => getCardWidth() * 0.057;

    const updateSlider = () => {
        const cardWidth = getCardWidth();
        const gap = getGap();
        const offset = currentIndex * (cardWidth + gap);
        container.style.transform = `translateX(-${offset}px)`;
    };

    document.getElementById("right-arrow-testimonial").addEventListener("click", () => {
        const maxIndex = cards.length - getVisibleCards();
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    document.getElementById("left-arrow-testimonial").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
});
