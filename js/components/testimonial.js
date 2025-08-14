document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".testimonial-profiles");
    const videoImage = document.getElementById("video-image");
    const profileName = document.getElementById("videointro-profilename");
    const profileDescription = document.getElementById("videointro-profiledescription");

    const testimonials = [
       
        {
            stars: 5,
            description: "Buying my first home in Dubai felt overwhelming at first, but Ahmed guided me through every step. He knew exactly which areas were growing, and his advice made me feel confident in my decision",
            profileImg: "assets/images/profile2.jpg",
            name: "Sarah M",
            designation: "Senior Financial Analyst"
        },
        {
            stars: 5,
            description: "Trixis Homes sold my Dubai Marina apartment in record time. The marketing was spot on, the viewings were well-handled, and I got the price I wanted without stress",
            profileImg: "assets/images/profile3.jpg",
            name: "Daniel R",
            designation: "Entrepreneur & Property Owner"
        },
        {
            stars: 5,
            description: "As an overseas buyer investing in Dubai, I was worried about the process. Emily and the team kept me informed, handled all the paperwork, and secured me a property with great ROI. They made it simple",
            profileImg: "assets/images/profile4.jpg",
            name: "Rajiv P",
            designation: "International Investor"
        },
        {
            stars: 5,
            description: "Emily walked me through every step of my green home investment. She explained things clearly, gave great advice, and honestly just made it all feel doable.",
            profileImg: "assets/images/profile1.png",
            name: "Logan Price",
            designation: "Environmental Consultant"
        },
    ];

    // Build testimonial HTML
    const createTestimonialHTML = (item, index) => {
        const starsHTML = '<img src="assets/images/star-rating.png" alt="Star">'.repeat(item.stars);
        return `
            <div class="individual-testimonials" data-index="${index}">
                <div class="star-ratingcontainer">${starsHTML}</div>
                <p class="testimonial-description">${item.description}</p>
                <div class="profile-view" style="cursor:pointer;">
                    <img src="${item.profileImg}" style="object-fit:cover;" alt="${item.name}" >
                    <div class="profile-detail">
                        <p class="profile-name">${item.name}</p>
                        <p class="profile-designation">${item.designation}</p>
                    </div>
                </div>
            </div>
        `;
    };

    // Add testimonials to DOM
    testimonials.forEach((testimonial, index) => {
        container.innerHTML += createTestimonialHTML(testimonial, index);
    });

    // Now select cards AFTER rendering
    const cards = document.querySelectorAll(".individual-testimonials");

    // Click event for profile update
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const index = card.getAttribute("data-index");
            const selected = testimonials[index];
            videoImage.src = selected.profileImg;
            profileName.textContent = selected.name;
            profileDescription.textContent = selected.designation;
        });
    });

    // Slider logic
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
