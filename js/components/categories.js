document.addEventListener("DOMContentLoaded", () => {
    const categoryImages = {
        "sale-apartments": [
            { src: "assets/images/Apartments for sale/Business bay.jpg", title: "Business bay" },
            { src: "assets/images/Apartments for sale/Creek harbour_.jpg", title: "Creek harbour" },
            { src: "assets/images/Apartments for sale/Dubai hills estate.jpg", title: "Dubai Hills Estate" },
            { src: "assets/images/Apartments for sale/Dubai marina .jpg", title: "Dubai marina" },
            { src: "assets/images/Apartments for sale/Mina Rashid.jpg", title: "Mina Rashid" },
            { src: "assets/images/Apartments for sale/greek harbour.jpg", title: "creek harbour" },
            { src: "assets/images/Apartments for sale/city walk.jpg", title: "city walk" },
        ],
        "rent-apartments": [
            { src: "assets/images/Apartment for rent/Blue waters.jpg", title: "Jbr" },
            { src: "assets/images/Apartment for rent/Business bay.jpg", title: "business bay" },
            { src: "assets/images/Apartment for rent/City walk.jpg", title: "city walk" },
            { src: "assets/images/Apartment for rent/Creek harbour.jpg", title: "blue water" },
            { src: "assets/images/Apartment for rent/Dubai marina .jpg", title: "dubai marina" },
            { src: "assets/images/Apartment for rent/Marina walk.jpg", title: "creek harbour" },
            { src: "assets/images/Apartment for rent/Palm west.jpg", title: "palm west" }
        ],
        "sale-villas": [
            { src: "assets/images/Villa for sales/arabian ranches_.jpg", title: "arabian ranches" },
            { src: "assets/images/Villa for sales/Emirates hills_.jpg", title: "emirates hills" },
            { src: "assets/images/Villa for sales/Hill estates.jpg", title: "hill estates" },
            { src: "assets/images/Villa for sales/Selvaraa By Emaar.jpg", title: "Selvaraa By Emaar" },
            { src: "assets/images/Villa for sales/Palm residence.jpg", title: "palm residence" },
            { src: "assets/images/Villa for sales/Meydan_.jpg", title: "Meydan" },
            { src: "assets/images/Villa for sales/Palm jumeirah_.jpg", title: "palm jumeirah" }
        ],
        "rent-villas": [
            { src: "assets/images/Villa for rent/arabian ranches.jpg", title: "arabian ranches" },
            { src: "assets/images/Villa for rent/Creek mansion.jpg", title: "Creek mansion" },
            { src: "assets/images/Villa for rent/Emirates hills.jpg", title: "emirates hills" },
            { src: "assets/images/Villa for rent/Nad AI Sheba.jpg", title: "Nad AI Sheba" },
            { src: "assets/images/Villa for rent/Hill estates_.jpg", title: "Hill estates" },
            { src: "assets/images/Villa for rent/Meydan_.jpg", title: "Meydan" },
            { src: "assets/images/Villa for rent/Palm jumeirah_.jpg", title: "palm jumeirah" }
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
