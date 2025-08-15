document.addEventListener("DOMContentLoaded", () => {
    const categoryImages = {
        "sale-apartments": [
            { src: "/assets/images/Apartments for sale/Business bay.jpg", title: "Business bay" },
            { src: "/assets/images/Apartments for sale/Creek harbour_.jpg", title: "Creek harbour" },
            { src: "/assets/images/Apartments for sale/Dubai hills estate.jpg", title: "Dubai Hills Estate" },
            { src: "/assets/images/Apartments for sale/Dubai marina .jpg", title: "Dubai marina" },
            { src: "/assets/images/Apartments for sale/Mina Rashid.jpg", title: "Mina Rashid" },
            { src: "/assets/images/Apartments for sale/greek harbour.jpg", title: "creek harbour" },
            { src: "/assets/images/Apartments for sale/city walk.jpg", title: "city walk" },
        ],
        "rent-apartments": [
            { src: "/assets/images/Apartment for rent/Blue waters.jpg", title: "blue waters" },
            { src: "/assets/images/Apartment for rent/Business bay.jpg", title: "business bay" },
            { src: "/assets/images/Apartment for rent/City walk.jpg", title: "city walk" },
            { src: "/assets/images/Apartment for rent/Creek harbour.jpg", title: "creek harbour" },
            { src: "/assets/images/Apartment for rent/Dubai marina .jpg", title: "dubai marina" },
            { src: "/assets/images/Apartment for rent/Marina walk.jpg", title: "marina walk" },
            { src: "/assets/images/Apartment for rent/Palm west.jpg", title: "palm west" }
        ],
        "sale-villas": [
            { src: "/assets/images/Villa for sales/Bl air Vila.jpg", title: "Bl air Vila" },
            { src: "/assets/images/Villa for sales/Canal view.jpg", title: "Canal view" },
            { src: "/assets/images/Villa for sales/Creek mansion_.jpg", title: "Creek mansion" },
            { src: "/assets/images/Villa for sales/Jbr luxury.jpg", title: "jbr luxury" },
            { src: "/assets/images/Villa for sales/Emirates hills.jpg", title: "Emirates hills" },
            { src: "/assets/images/Villa for sales/Palm jumeirah.jpg", title: "palm jumeirah" },
            { src: "/assets/images/Villa for sales/Business Bay.jpg", title: "Business bay" },
        ],
        "rent-villas": [
            { src: "/assets/images/Villa for rent/Blue water.jpg", title: "blue water" },
            { src: "/assets/images/Villa for rent/Canal bay.jpg", title: "canal bay" },
            { src: "/assets/images/Villa for rent/City mansion_.jpg", title: "city mansion" },
            { src: "/assets/images/Villa for rent/Creek harbour.jpg", title: "creek harbour" },
            { src: "/assets/images/Villa for rent/Downtown villa.jpg", title: "downtown villa" },
            { src: "/assets/images/Villa for rent/Hillestate_.jpg", title: "hilestate" },
            { src: "/assets/images/Villa for rent/Palm residence.jpg", title: "palm residence" }
        ]
    };

    const listItems = document.querySelectorAll(".categories-list li");
    const imageWrappers = document.querySelectorAll(".categories-listitems .img-wrapper");

    function updateCategory(category) {
        let mappedCategory = category;

        // Swap logic: sale ↔ rent
        if (category === "sale-apartments") mappedCategory = "rent-apartments";
        else if (category === "rent-apartments") mappedCategory = "sale-apartments";
        else if (category === "sale-villas") mappedCategory = "rent-villas";
        else if (category === "rent-villas") mappedCategory = "sale-villas";

        const newImages = categoryImages[mappedCategory];

        // Update images & captions
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
