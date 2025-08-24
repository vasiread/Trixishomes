document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".profiles-marquee");
    const clone = marquee.cloneNode(true);

    // Add a gap between sets
    clone.style.marginLeft = "20px";
    marquee.parentElement.appendChild(clone);

    // ✅ Measure ONLY the original width (without the clone)
    const totalWidth = marquee.scrollWidth + 20;

    // Adjust animation duration dynamically (100px/sec speed)
    const speed = 100; // px per second
    const duration = totalWidth / speed;

    // Calculate transform distance based on screen size
    const baseWidth = 1400; // reference design width
    const baseDistance = 500; // distance at 1400px
    const scrollDistance = (window.innerWidth / baseWidth) * baseDistance;

    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        @keyframes scroll-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-${scrollDistance}px); }
        }
        .marquee-wrapper {
            display: flex;
            overflow: hidden;
        }
        .profiles-marquee {
            display: flex;
            gap: 2rem;
            animation: scroll-marquee ${duration}s linear infinite;
            width: max-content;
        }
    `;
    document.head.appendChild(styleSheet);
});
