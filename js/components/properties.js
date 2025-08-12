document.addEventListener("DOMContentLoaded", () => {
    const leftArrow = document.getElementById('leftsidemove');
    const rightArrow = document.getElementById('rightsidemove');
    const slider = document.querySelector('.properties-groups');

    let scrollAmount = 0;
    const slideStep = 350; // Adjust based on card width

    // ✅ Property data (dynamic)
    const properties = [
        {
            img: "/assets/images/property1.png",
            info: "For Investment",
            location: "Bel Air, LA",
            title: "The One",
            bhk: { bedroom: 6, washroom: 4, sqrft: 2780 },
            price: 690000
        },
        {
            img: "/assets/images/property2.png",
            info: "For Sell",
            location: "Bel Air, LA",
            title: "Billionaire Mansion",
            bhk: { bedroom: 5, washroom: 0, sqrft: 3800 },
            price: 500000
        },
       
       
        {
            img: "/assets/images/property3.png",
            info: "For Rent",
            location: "Beverly Hills, CA",
            title: "The Beverly House",
            bhk: { bedroom: 2, washroom: 3, sqrft: 2100 },
            price: 290000
        },

        // ✅ Added from the reference list
        {
            img: "assets/images/property4.png",
            info: "For Rent",
            location: "Beverly Hills, CA",
            title: "Palazzo di Amore",
            bhk: { bedroom: 4, washroom: 2, sqrft: 2100 },
            price: 490000
        },
        {
            img: "assets/images/property5.png",
            info: "For Investment",
            location: "Holmby Hills, LA",
            title: "The Manor",
            bhk: { bedroom: 7, washroom: 5, sqrft: 3100 },
            price: 482000
        },
        {
            img: "assets/images/property6.png",
            info: "For Sell",
            location: "Upper East Side, NY",
            title: "The Penthouse at Central Park Tower",
            bhk: { bedroom: 2, washroom: 0, sqrft: 2200 },
            price: 298000
        },
        {
            img: "assets/images/property7.png",
            info: "For Investment",
            location: "Bel Air, LA",
            title: "The One",
            bhk: { bedroom: 6, washroom: 4, sqrft: 2780 },
            price: 690000
        },
        {
            img: "assets/images/property8.png",
            info: "For Investment",
            location: "Bel Air, LA",
            title: "Billionaire Mansion",
            bhk: { bedroom: 5, washroom: 0, sqrft: 3800 },
            price: 500000
        },
        {
            img: "assets/images/property9.png",
            info: "For Investment",
            location: "Beverly Hills, CA",
            title: "The Beverly House",
            bhk: { bedroom: 3, washroom: 2, sqrft: 1500 },
            price: 290000
        }
    ];


    // ✅ Render properties dynamically
    const propertiesList = document.getElementById("propertiesList");

    properties.forEach(property => {
        // ✅ Washroom conditional display like in renderProperties
        let washroomHTML = '';
        if (property.bhk.washroom > 0) {
            washroomHTML = `
            <div class="washroomdiv">
                <img src="assets/images/washroomicon.png" alt="">
                <p>${property.bhk.washroom}</p>
            </div>
        `;
        } else {
            washroomHTML = `
            <div class="washroomdiv" style="display:none">
                <img src="assets/images/washroomicon.png" alt="">
                <p>${property.bhk.washroom}</p>
            </div>
        `;
        }

        // ✅ Add full card with BHK block in between title & price
        propertiesList.innerHTML += `
        <div class="individual-property">
            <img src="${property.img}" alt="">
            <div class="img-info">${property.info}</div>
            <div class="location-property">
                <img src="/assets/images/mapicon.png" alt="">
                <p>${property.location}</p>
            </div>
            <h3>${property.title}</h3>

            <div class="property-sqrtinfos" id="properties-section-unique">
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

            <p id="dollor-unique" ><span>$</span> ${property.price.toLocaleString()}</p>
        </div>
    `;
    });


    // ✅ Slider functionality
    rightArrow.addEventListener('click', () => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        if (scrollAmount < maxScroll) {
            scrollAmount += slideStep;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    leftArrow.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= slideStep;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});