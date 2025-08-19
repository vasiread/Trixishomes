document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".testimonial-profiles");
    const videoImage = document.getElementById("video-image");
    const profileName = document.getElementById("videointro-profilename");
    const profileDescription = document.getElementById("videointro-profiledescription");

    const testimonials = [
        {
            stars: 5,
            description: "We had a wonderful experience buying our property in Dubai through Rithwik at Trixis Homes.His professionalism, patience, and expert guidance made the process seamless.He is honest, trustworthy, and always available to support at every stage.  Highly recommend Rithwik and Trixis Homes for buying in Dubai!",
            profileImg: "assets/images/profile2.jpg",
            name: "Chitra Rattehalli",
            designation: "Local Guide"
        },
        {
            stars: 5,
            description: "Buying my second property in Dubai through Trixis Homes was an excellent experience.  Vignesh was polite, professional, and guided us with great detail and solutions.  His support helped us overcome financing challenges and confidently move ahead.  Truly appreciate his honesty and expertise highly recommend Trixis Homes!",
            profileImg: "assets/images/profile3.jpg",
            name: "Praveen Dcruze",
            designation: "Local Guide"
        },
        {
            stars: 5,
            description: "Thanks Rithvik for helping us out in navigating options, recommended to anyone who needs expert knowledge and transparent views.",
            profileImg: "assets/images/profile4.jpg",
            name: "Christian Briffa",
            designation: "Local Guide"
        },
        {
            stars: 5,
            description: "An excellent experience purchasing my unit through Trixis Homes.  A special thanks to Vignesh for his meticulous attention to detail and in-depth project knowledge.   He clarified all doubts with facts and figures, helping us make a confident decision.  Highly recommend Vignesh and Trixis Homes for any property dealings in the UAE.",
            profileImg: "assets/images/profile1.png",
            name: "Nashath A Hameed",
            designation: "Local Guide"
        },
        {
            stars: 5,
            description: "Thanks Rithvik for the assistance, we're very much happy with the outcome! All the best!",
            profileImg: "assets/images/profile1.png",
            name: "John Chavez",
            designation: "Local Guide"
        }
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
