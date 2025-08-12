const properties = [
    {
        img: "assets/images/property1.png",
        info: "For Investment",
        location: "Bel Air, LA",
        title: "The One",
        bhk: {
            bedroom: 6,
            washroom: 4,
            sqrft: 2780
        },
        price: 690000
    },
    {
        img: "assets/images/property2.png",
        info: "For Sell",
        location: "Bel Air, LA",
        title: "Billionaire Mansion",
        bhk: {
            bedroom: 5,
            washroom: 0,
            sqrft: 3800
        },
        price: 500000
    },
    {
        img: "assets/images/property3.png",
        info: "For Rent",
        location: "Beverly Hills, CA",
        title: "Sunset Home",
        bhk: {
            bedroom: 3,
            washroom: 2,
            sqrft: 1500
        },
        price: 290000
    },
    {
        img: "assets/images/property4.png",
        info: "For Rent",
        location: "Beverly Hills, CA",
        title: "Palazzo di Amore",
        bhk: {
            bedroom: 4,
            washroom: 2,
            sqrft: 2100
        },
        price: 490000
    },
    {
        img: "assets/images/property5.png",
        info: "For Investment",
        location: "Holmby Hills, LA",
        title: "The Manor",
        bhk: {
            bedroom: 7,
            washroom: 5,
            sqrft: 3100
        },
        price: 482000
    },
    {
        img: "assets/images/property6.png",
        info: "For Sell",
        location: "Upper East Side, NY",
        title: "The Penthouse at Central Park Tower",
        bhk: {
            bedroom: 2,
            washroom: 0,
            sqrft: 2200
        },
        price: 298000
    },
    {
        img: "assets/images/property7.png",
        info: "For Investment",
        location: "Bel Air, LA",
        title: "The One",
        bhk: {
            bedroom: 6,
            washroom: 4,
            sqrft: 2780
        },
        price: 690000
    },
    {
        img: "assets/images/property8.png",
        info: "For Investment",
        location: "Bel Air, LA",
        title: "Billionaire Mansion",
        bhk: {
            bedroom: 5,
            washroom: 0,
            sqrft: 3800
        },
        price: 500000
    },
    {
        img: "assets/images/property9.png",
        info: "For Investment",
        location: "Beverly Hills, CA",
        title: "The Beverly House",
        bhk: {
            bedroom: 3,
            washroom: 2,
            sqrft: 1500
        },
        price: 290000
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
                if (activeCategory === "SELL") {
                    matchesCategory = info === "for sell";
                } else if (activeCategory === "RENTALS") {
                    matchesCategory = info === "for rent";
                } else if (
                    activeCategory === "LUXURY HOMES" ||
                    activeCategory === "INTERNATIONAL PROPERTIES"
                ) {
                    matchesCategory = info === "for investment";
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

            // Start building the card's HTML
            let washroomHTML = '';
            if (property.bhk.washroom > 0) {
                washroomHTML = `
            <div class="washroomdiv">
                <img src="assets/images/washroomicon.png" alt="">
                <p>${property.bhk.washroom}</p>
            </div>
        `;
            }
            else if (property.bhk.washroom === 0) {
                washroomHTML = `
            <div class="washroomdiv" style="display:none">
                <img src="assets/images/washroomicon.png" alt="">
                <p>${property.bhk.washroom}</p>
            </div>
        `;
            }

            card.innerHTML = `
        <img id="propertyunique-img" src="${property.img}" alt="">
        <div class="img-info-found">${property.info}</div>
        <div class="location-property-found">
            <img src="assets/images/mapicon.png" alt="">
            <p>${property.location}</p>
        </div>
        <h3>${property.title}</h3>

        <div class="property-sqrtinfos">
            <div class="bedroomdiv">
                <img src="assets/images/bedroomicon.png" alt="">
                <p>${property.bhk.bedroom}</p>
            </div>

            ${washroomHTML}

            <div class="sqrft">
                <img src="assets/images/sqrfticon.png" alt="">
                <p>${property.bhk.sqrft} sq.ft</p>
            </div>
        </div>

        <p id="dollor"><span>$</span> ${property.price.toLocaleString()}</p>
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