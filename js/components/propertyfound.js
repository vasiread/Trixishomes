const properties = [
    {
        img: "public/assets/images/property1.png",
        info: "For International Properties",
        location: "Sheikh Zayed Road, Trade Center 2, Dubai",
        title: "The One",
        bhk: {
            bedroom: 1,
            washroom: 1,
            sqrft: 750
        },
        price: 4800000
    },
    {
        img: "public/assets/images/property2.jpg",
        info: "For International Properties",
        location: "Hill estate, Dubai",
        title: "Billionaire Mansion",
        bhk: {
            bedroom: 5,
            washroom: 0,
            sqrft: 3800
        },
        price: 11000000
    },
    {
        img: "public/assets/images/property3.jpg",
        info: "For Rent",
        location: "Creek Harbour, Dubai",
        title: "The Address",
        bhk: {
            bedroom: 3,
            washroom: 2,
            sqrft: 1500
        },
        price: 290000
    },
    {
        img: "public/assets/images/property4.jpg",
        info: "For Rent",
        location: "Blue Waters Island, Dubai",
        title: "Blue Waters",
        bhk: {
            bedroom: 3,
            washroom: 4,
            sqrft: 2100
        },
        price: 360000
    },
    {
        img: "public/assets/images/property5.jpg",
        info: "For International Properties",
        location: "Al Furjan, Dubai",
        title: "The Manor by JA",
        bhk: {
            bedroom: 7,
            washroom: 5,
            sqrft: 3100
        },
        price: 15000000
    },
    {
        img: "public/assets/images/property6.jpg",
        info: "For Sell",
        location: "Al Safa, Dubai",
        title: "Cavalli couture by Canal",
        bhk: {
            bedroom: 2,
            washroom: 0,
            sqrft: 2200
        },
        price: 8000000
    },


    {
        img: "public/assets/images/property9.jpg",
        info: "For International Properties",
        location: "Palm jumeriah Oasis, Dubai",
        title: "The Beverly House",
        bhk: {
            bedroom: 3,
            washroom: 2,
            sqrft: 2950
        },
        price: 45000000
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const propertyGrid = document.getElementById("propertyGrid");
    const categoryItems = document.querySelectorAll('#categoryList li');
    const searchInput = document.querySelector('.rightsidesection-searchbar input');
    const searchButton = document.querySelector('.rightsidesection-searchbar button');

    let activeCategory = null; // No category selected initially

    // Filter and render properties
    function renderFilteredProperties() {
        const searchText = searchInput.value.toLowerCase().trim();

        let filtered = properties.filter((property) => {
            const info = property.info.toLowerCase();
            const title = property.title.toLowerCase();
            const location = property.location.toLowerCase();

            const matchesSearch =
                searchText === "" || title.includes(searchText) || location.includes(searchText);

            let matchesCategory = true;

            if (activeCategory) {
                const categoryLower = activeCategory.toLowerCase();

                if (categoryLower === "sell") {
                    matchesCategory = info.includes("sell");
                } else if (categoryLower === "rentals") {
                    matchesCategory = info.includes("rent");
                } else if (
                    categoryLower === "luxury homes" ||
                    categoryLower === "international properties"
                ) {
                    matchesCategory = info.includes("international properties");
                }
            }


            return matchesCategory && matchesSearch;
        });

        renderProperties(filtered);
    }

    // Render function
    function renderProperties(list) {
        propertyGrid.innerHTML = "";

        // Update the H2 heading with count
        const heading = document.getElementById("propertiesFoundHeading");
        if (heading) {
            heading.textContent = `${list.length} PROPERT${list.length === 1 ? 'Y' : 'IES'} FOUND`;
        }

        if (list.length === 0) {
            propertyGrid.innerHTML = "<p>No properties found.</p>";
            return;
        }

        list.forEach((property) => {
            const card = document.createElement("div");
            card.className = "property-card";

            // washroom logic
            let washroomHTML = '';
            if (property.bhk.washroom > 0) {
                washroomHTML = `
                <div class="washroomdiv">
                    <img src="public/assets/images/washroomicon.png" alt="">
                    <p>${property.bhk.washroom}</p>
                </div>
            `;
            }

            // ✅ info logic
            let infoHTML = '';
            if (property.info.toLowerCase() !== "for international properties") {
                infoHTML = `<div class="img-info-found">${property.info}</div>`;
            }

            card.innerHTML = `
            <img id="propertyunique-img" src="${property.img}" alt="">
            ${infoHTML}
            <div class="location-property-found">
                <img src="public/assets/images/mapicon.png" alt="">
                <p>${property.location}</p>
            </div>
            <h3>${property.title}</h3>

            <div class="property-sqrtinfos">
                <div class="bedroomdiv">
                    <img src="public/assets/images/bedroomicon.png" alt="">
                    <p>${property.bhk.bedroom}</p>
                </div>

                ${washroomHTML}

                <div class="sqrft">
                    <img src="public/assets/images/sqrfticon.png" alt="">
                    <p>${property.bhk.sqrft} sq.ft</p>
                </div>
            </div>

            <p id="dollor"><span>AED</span> ${property.price.toLocaleString()}</p>
        `;

            propertyGrid.appendChild(card);
        });
    }



    // Handle category click
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove previous active
            categoryItems.forEach(li => li.classList.remove('active'));

            // Set clicked one as active
            item.classList.add('active');
            activeCategory = item.textContent.trim();

            renderFilteredProperties();
        });
    });

    const viewProperties = document.getElementById("property-found");
    searchButton.addEventListener("click", () => {
        renderFilteredProperties();
        if (viewProperties) {
            viewProperties.style.display = "block";
        }
        window.scrollBy({
            top: 600,
            behavior: 'smooth'
        });
    });

    // Initial render: show all
    renderProperties(properties);
});