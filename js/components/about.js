document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".profiles-marquee");
    const clone = marquee.cloneNode(true);
    marquee.parentElement.appendChild(clone);
});