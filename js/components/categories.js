document.addEventListener("DOMContentLoaded", () => {
    const categoryImages = {
        "sale-apartments": [
            { src: "/public/assets/images/Apartments for sale/Business bay.webp", title: "Business bay" },
            { src: "/public/assets/images/Apartments for sale/Creek harbour_.webp", title: "Creek harbour" },
            { src: "/public/assets/images/Apartments for sale/Dubai hills estate.webp", title: "Dubai Hills Estate" },
            { src: "/public/assets/images/Apartments for sale/Dubai marina .webp", title: "Dubai marina" },
            { src: "/public/assets/images/Apartments for sale/Mina Rashid.webp", title: "Mina Rashid" },
            { src: "/public/assets/images/Apartments for sale/greek harbour.webp", title: "Downtown" },
            { src: "/public/assets/images/Apartments for sale/city walk.webp", title: "city walk" },
        ],
        "rent-apartments": [
            { src: "/public/assets/images/Apartment for rent/Blue waters.webp", title: "Jbr" },
            { src: "/public/assets/images/Apartment for rent/Business bay.webp", title: "business bay" },
            { src: "/public/assets/images/Apartment for rent/City walk.webp", title: "city walk" },
            { src: "/public/assets/images/Apartment for rent/Creek harbour.webp", title: "blue water" },
            { src: "/public/assets/images/Apartment for rent/Dubai marina .webp", title: "dubai marina" },
            { src: "/public/assets/images/Apartment for rent/Marina walk.webp", title: "creek harbour" },
            { src: "/public/assets/images/Apartment for rent/Palm west.webp", title: "palm west" }
        ],
        "sale-villas": [
            { src: "/public/assets/images/Villa for sales/arabian ranches_.webp", title: "arabian ranches" },
            { src: "/public/assets/images/Villa for sales/Emirates hills_.webp", title: "emirates hills" },
            { src: "/public/assets/images/Villa for sales/Hill estates.webp", title: "hill estates" },
            { src: "/public/assets/images/Villa for sales/Selvaraa By Emaar.webp", title: "Selvaraa By Emaar" },
            { src: "/public/assets/images/Villa for sales/Palm residence.webp", title: "palm residence" },
            { src: "/public/assets/images/Villa for sales/Meydan_.webp", title: "Meydan" },
            { src: "/public/assets/images/Villa for sales/Palm jumeirah_.webp", title: "palm jumeirah" }
        ],
        "rent-villas": [
            { src: "/public/assets/images/Villa for rent/arabian ranches.webp", title: "arabian ranches" },
            { src: "/public/assets/images/Villa for rent/Damac Hills 1.webp", title: "Damac Hills 1" },
            { src: "/public/assets/images/Villa for rent/Emirates hills.webp", title: "emirates hills" },
            { src: "/public/assets/images/Villa for rent/Nad AI Sheba.webp", title: "Nad AI Sheba" },
            { src: "/public/assets/images/Villa for rent/Hill estates_.webp", title: "Hill estates" },
            { src: "/public/assets/images/Villa for rent/Meydan_.webp", title: "Meydan" },
            { src: "/public/assets/images/Villa for rent/Palm jumeirah_.webp", title: "palm jumeirah" }
        ]
    };

    const listItems = document.querySelectorAll(".categories-list li");
    const imageWrappers = document.querySelectorAll(".categories-listitems .img-wrapper");

    function updateCategory(category) {
        const newImages = categoryImages[category];  // no swap
        imageWrappers.forEach((wrapper, i) => {
            const img = wrapper.querySelector("img");
            const caption = wrapper.querySelector("p");

            if (newImages[i]) {
                wrapper.style.display = "block";
                img.src = newImages[i].src;
                caption.textContent = newImages[i].title;
            } else {
                wrapper.style.display = "none";
            }
        });
    }


    listItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class from all
            listItems.forEach(li => li.classList.remove("active-category"));
            item.classList.add("active-category");

            const category = item.getAttribute("data-category");
            updateCategory(category);
        });
    });

    // Trigger initial load (will show rent instead of sale by mapping)
    const initialItem = document.querySelector(".categories-list li.active-category");
    if (initialItem) {
        const category = initialItem.getAttribute("data-category");
        updateCategory(category);
    }
});
