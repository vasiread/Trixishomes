document.addEventListener("DOMContentLoaded", () => {
    const leftArrow = document.getElementById('leftsidemove');
    const rightArrow = document.getElementById('rightsidemove');
    const slider = document.querySelector('.properties-groups');

    let scrollAmount = 0;

    // ✅ Property data (dynamic)
    const properties = [
        {
            img: "/assets/images/property1.png",
            info: "For Investment",
            location: "Sheikh Zayed Road, Trade Center 2, Dubai",
            title: "The One",
            bhk: { bedroom: 1, washroom: 1, sqrft: 750 },
            price: 4800000
        },
        {
            img: "/assets/images/property2.jpg",
            info: "For International Properties",
            location: "Hill estate, Dubai",
            title: "Billionaire Mansion",
            bhk: { bedroom: 5, washroom: 0, sqrft: 3800 },
            price: 11000000
        },
        {
            img: "/assets/images/property10.png",
            info: "For Investment",
            location: "Business Bay, Dubai",
            title: "DWTN residence by Deyaa",
            bhk: { bedroom: 1, washroom: 2, sqrft: 800 },
            price: 2100000
        },
        {
            img: "/assets/images/property11.png",
            info: "For Investment",
            location: "Masaar, Sharjah",
            title: "MASAAR by ARADA",
            bhk: { bedroom: 4, washroom: 4, sqrft: 1850 },
            price: 2800000
        },
        {
            img: "/assets/images/property13.png",
            info: "For Investment",
            location: "Dubailand, Dubai",
            title: "Athlon by ALDAR",
            bhk: { bedroom: 3, washroom: 4, sqrft: 2400 },
            price: 10300000
        },
        {
            img: "/assets/images/property4.jpg",
            info: "For Rent",
            location: "Blue Waters Island, Dubai",
            title: "Blue Waters",
            bhk: { bedroom: 3, washroom: 4, sqrft: 2100 },
            price: 360000
        },
        {
            img: "/assets/images/property5.jpg",
            info: "For Investment",
            location: "AI Furion, Dubai",
            title: "The Manor by JA",
            bhk: { bedroom: 7, washroom: 5, sqrft: 3100 },
            price: 15000000
        },
        {
            img: "/assets/images/property6.jpg",
            info: "For Sell",
            location: "Al Safa, Dubai",
            title: "Cavalli couture by Canal",
            bhk: { bedroom: 2, washroom: 0, sqrft: 2200 },
            price: 8000000
        },
        {
            img: "/assets/images/property9.jpg",
            info: "For Investment",
            location: "Palm jumeriah Oasis, Dubai",
            title: "The Beverly House",
            bhk: { bedroom: 3, washroom: 2, sqrft: 2950 },
            price: 45000000
        },
        {
            img: "/assets/images/property14.png",
            info: "For Rent",
            location: "Rashid Yatchs & Marina, Dubai",
            title: "Baystar by EMAAR",
            bhk: { bedroom: 2, washroom: 1, sqrft: 750 },
            price: 1900000
        }
    ];

    // ✅ Render properties dynamically
    const propertiesList = document.getElementById("propertiesList");

    properties.forEach(property => {
        let washroomHTML = '';
        if (property.bhk.washroom > 0) {
            washroomHTML = `
            <div class="washroomdiv">
                <img src="/assets/images/washroomicon.png" alt="">
                <p>${property.bhk.washroom}</p>
            </div>
        `;
        } else {
            washroomHTML = `
            <div class="washroomdiv" style="display:none">
                <img src="/assets/images/washroomicon.png" alt="">
                <p>${property.bhk.washroom}</p>
            </div>
        `;
        }

        propertiesList.innerHTML += `
        <div class="individual-property">
            <img src="${property.img}" alt="" id="individualproperty-uniqueimg">
            <div class="img-info">${property.info}</div>
            <div class="location-property">
                <img src="/assets/images/mapicon.png" alt="">
                <p>${property.location}</p>
            </div>
            <h3>${property.title}</h3>

            <div class="property-sqrtinfos" id="properties-section-unique">
                <div class="bedroomdiv">
                    <img src="/assets/images/bedroomicon.png" alt="">
                    <p>${property.bhk.bedroom}</p>
                </div>
                ${washroomHTML}
                <div class="sqrft">
                    <img src="/assets/images/sqrfticon.png" alt="">
                    <p>${property.bhk.sqrft} sq.ft</p>
                </div>
            </div>

            <p id="dollor-unique"><span>AED</span> ${property.price.toLocaleString()}</p>
        </div>
    `;
    });

    // ✅ Helper: get dynamic step size
    function getSlideStep() {
        const card = document.querySelector('.individual-property');
        return card ? card.offsetWidth + 20 : 350; // add gap
    }

    // ✅ Slider functionality
    rightArrow.addEventListener('click', () => {
        const slideStep = getSlideStep();
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (scrollAmount < maxScroll) {
            scrollAmount += slideStep;
            if (scrollAmount > maxScroll) scrollAmount = maxScroll;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    leftArrow.addEventListener('click', () => {
        const slideStep = getSlideStep();

        if (scrollAmount > 0) {
            scrollAmount -= slideStep;
            if (scrollAmount < 0) scrollAmount = 0;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    // ✅ On resize: reset position & recalc
    window.addEventListener('resize', () => {
        scrollAmount = 0;
        slider.style.transform = `translateX(0px)`;
    });
});
