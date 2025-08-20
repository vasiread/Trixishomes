document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".testimonial-profiles");
    const videoImage = document.getElementById("video-image");
    const profileName = document.getElementById("videointro-profilename");
    const profileDescription = document.getElementById("videointro-profiledescription");

    const testimonials = [
        {
            stars: 5,
            description: "Buying our property in Dubai through Rithvik was a smooth and successful experience. His professionalism, patience, and honest guidance at every step made us feel confident. We highly recommend Trixis Homes and Rithwik for anyone looking to invest in Dubai.",
            profileImg: "/public/assets/images/profile2.jpg",
            name: "Chitra Rattehalli",
            designation: "USA"
        },
        {
            stars: 5,
            description: "When I was exploring my second property in Dubai, I was contacted by Vignesh, who was polite and welcoming. He then introduced us to Rithvik, whose knowledge and attention to detail were impressive. What stood out was his ability to offer financing solutions, which helped us proceed with ease. It was truly an awesome experience..kudos to Trixis Homes!",
            profileImg: "/public/assets/images/profile3.jpg",
            name: "Praveen Dcruze",
            designation: "UAE"
        },
        {
            stars: 5,
            description: "Thanks Juber for helping us out in navigating options, recommended to anyone who needs expert knowledge and transparent views.",
            profileImg: "/public/assets/images/profile4.jpg",
            name: "Christian Briffa",
            designation: "Malta"
        },
        {
            stars: 5,
            description: "Amal made our property buying process smooth and stress-free. His professionalism, attention to detail, and commitment to finding the right property were outstanding. We’re very happy with Trixis Homes and highly recommend Amal.",
            profileImg: "/public/assets/images/profile4.jpg",
            name: "Rakshith Gowda",
            designation: "India"
        },
        {
            stars: 5,
            description: "Had a great experience securing my unit with Trixis Homes. A special note of appreciation to Mr. Ayan, who was meticulous, detailed, and extremely well-informed about the project, areas, and locations. He cleared every doubt with facts and figures, helping me make a confident decision. I would highly recommend Trixis Homes and Mr. Ayan for anyone exploring upcoming projects in the UAE.",
            profileImg: "/public/assets/images/profile4.jpg",
            name: "Nashath A Hameed",
            designation: "India"
        },
        {
            stars: 5,
            description: "We were fortunate to be guided by Mr. Hussain of Trixis Homes to buy our first property in the UAE. As first-time buyers, we were quite skeptical, but he patiently cleared our doubts and provided us with the right information at every step. We are truly pleased with the service.",
            profileImg: "/public/assets/images/profile4.jpg",
            name: "Sherine Shibu",
            designation: "UAE"
        },
        {
            stars: 5,
            description: "This was my first property purchase in Dubai, and I had little knowledge of the market. Mr. Rithvik guided me well and helped me secure a great deal in DMAC Hills 1. I am very happy with the service and the transparency with which Trixis Homes operates. I highly recommend Rithvik for trusted and excellent deals.",
            profileImg: "/public/assets/images/profile4.jpg",
            name: "Ravi Raj",
            designation: "UAE"
        },
        {
            stars: 5,
            description: "We are fortunate to have been introduced to Juber through Trixis Homes. Having lived in Dubai many years ago, we were hesitant to trust anyone in a real estate transaction where rules constantly evolve. Juber guided us throughout and was extremely helpful in finding a property to own and rent. We highly recommend connecting with him to benefit from his unwavering attention to detail and readiness to assist.",
            profileImg: "/public/assets/images/profile4.jpg",
            name: "Ashok Rattehalli",
            designation: "USA"
        },
        {
            stars: 5,
            description: "Hussain is a trustworthy professional. Thanks for your valuable inputs and guidance. All the best!",
            profileImg: "/public/assets/images/profile4.jpg",
            name: "Aravind Narayana",
            designation: "India"
        },

    ];

    // Build testimonial HTML
    const createTestimonialHTML = (item, index) => {
        const starsHTML = '<img src="/public/assets/images/star-rating.png" alt="Star">'.repeat(item.stars);
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
