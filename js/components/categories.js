document.addEventListener("DOMContentLoaded", () => {
    const categoryImages = {
        "sale-apartments": [
            { src: "/assets/images/category-firstgroup-firstimage.png", title: "dubai marina" },
            { src: "/assets/images/category-firstgroup-secondimage.png", title: "business bay" },
            { src: "/assets/images/category-secondgroup-firstimage.png", title: "business bay" },
            { src: "/assets/images/category-secondgroup-secondimage.png", title: "jbr" },
            { src: "/assets/images/category-thirdgroup-firstimage.png", title: "palm jumeirah" },
            { src: "/assets/images/category-fourthgroup-firstimage.png", title: "creek harbour" },
            { src: "/assets/images/category-fourthgroup-secondimage.png", title: "dubai hills estate" }
        ],
        "rent-apartments": [
            { src: "/assets/images/category-secondgroup-firstimage.png", title: "marina walk" },
            { src: "/assets/images/category-secondgroup-secondimage.png", title: "bluewaters" },
            { src: "/assets/images/category-secondgroup-firstimage.png", title: "business bay" },
            { src: "/assets/images/category-firstgroup-secondimage.png", title: "city walk" },
            { src: "/assets/images/category-thirdgroup-firstimage.png", title: "palm west" },
            { src: "/assets/images/category-fourthgroup-firstimage.png", title: "creek harbour" },
            { src: "/assets/images/category-firstgroup-firstimage.png", title: "dubai marina" }
        ],
        "sale-villas": [
            { src: "/assets/images/category-fourthgroup-secondimage.png", title: "emirates hills" },
            { src: "/assets/images/category-fourthgroup-firstimage.png", title: "creek mansion" },
            { src: "/assets/images/category-secondgroup-secondimage.png", title: "jbr luxury" },
            { src: "/assets/images/category-secondgroup-firstimage.png", title: "canal view" },
            { src: "/assets/images/category-thirdgroup-firstimage.png", title: "palm jumeirah" },
            { src: "/assets/images/category-secondgroup-firstimage.png", title: "downtown view" },
            { src: "/assets/images/category-firstgroup-firstimage.png", title: "bel air villa" }
        ],
        "rent-villas": [
            { src: "/assets/images/category-firstgroup-secondimage.png", title: "city mansion" },
            { src: "/assets/images/category-secondgroup-firstimage.png", title: "canal bay" },
            { src: "/assets/images/category-secondgroup-secondimage.png", title: "bluewaters" },
            { src: "/assets/images/category-fourthgroup-firstimage.png", title: "creek harbour" },
            { src: "/assets/images/category-thirdgroup-firstimage.png", title: "palm residence" },
            { src: "/assets/images/category-secondgroup-firstimage.png", title: "downtown villa" },
            { src: "/assets/images/category-fourthgroup-secondimage.png", title: "hills estate" }
        ]
    };

    const listItems = document.querySelectorAll(".categories-list li");
    const imageWrappers = document.querySelectorAll(".categories-listitems .img-wrapper");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            const category = item.getAttribute("data-category");
            const newImages = categoryImages[category];

            // Remove active class from all
            listItems.forEach(li => li.classList.remove("active-category"));
            item.classList.add("active-category");

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
        });
    });

    // Trigger initial load
    const initialItem = document.querySelector(".categories-list li.active-category");
    if (initialItem) {
        initialItem.click();
    }
});
