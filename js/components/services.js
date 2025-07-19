
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const el = entry.target;

                // Add visible class and stagger delay
                el.classList.add('visible');
                el.style.transitionDelay = `${index * 0.1}s`;

                obs.unobserve(el); // Only animate once
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% visible
    });

    // Observe all offer-box elements
    document.querySelectorAll('.offer-box').forEach(el => observer.observe(el));

})

