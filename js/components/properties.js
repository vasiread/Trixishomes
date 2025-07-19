document.addEventListener("DOMContentLoaded", () => {
    const leftArrow = document.getElementById('leftsidemove');
    const rightArrow = document.getElementById('rightsidemove');
    const slider = document.querySelector('.properties-groups');

    let scrollAmount = 0;
    const slideStep = 350; // Adjust based on your card width

    rightArrow.addEventListener('click', () => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        if (scrollAmount < maxScroll) {
            scrollAmount += slideStep;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    leftArrow.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= slideStep;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});
