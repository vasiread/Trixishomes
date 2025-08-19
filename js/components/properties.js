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
            img: "assets/images/property10.png",
            info: "For Investment",
            location: "Business Bay, Dubai",
            title: "DWTN residence by Deyaa",
            bhk: { bedroom: 1, washroom: 2, sqrft: 800 },
            price: 2100000
        },
        {
            img: "assets/images/property11.png",
            info: "For Investment",
            location: "Masaar, Sharjah",
            title: "MASAAR by ARADA",
            bhk: { bedroom: 4, washroom: 4, sqrft: 1850 },
            price: 2800000
        },
       
        {
            img: "assets/images/property13.png",
            info: "For Investment",
            location: "Dubailand, Dubai",
            title: "Athlon by ALDAR",
            bhk: { bedroom: 3, washroom: 4, sqrft: 2400 },
            price: 10300000
        },
        {
            img: "assets/images/property4.jpg",
            info: "For Rent",
            location: "Blue Waters Island, Dubai",
            title: "Palazzo di Amore",
            bhk: { bedroom: 3, washroom: 4, sqrft: 2100 },
            price: 240000
        },
        {
            img: "assets/images/property5.jpg",
            info: "For Investment",
            location: "AI Furion, Dubai",
            title: "The Manor by JA",
            bhk: { bedroom: 7, washroom: 5, sqrft: 3100 },
            price: 15000000
        },
        {
            img: "assets/images/property6.jpg",
            info: "For Sell",
            location: "Al Safa, Dubai",
            title: "Cavalli couture by Canal",
            bhk: { bedroom: 2, washroom: 0, sqrft: 2200 },
            price: 8000000
        },
      
        
        {
            img: "assets/images/property9.jpg",
            info: "For Investment",
            location: "Palm jumeriah Oasis, Dubai",
            title: "The Beverly House",
            bhk: { bedroom: 3, washroom: 2, sqrft: 2950 },
            price: 45000000
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
            <img src="${property.img}" alt="" id="individualproperty-uniqueimg">
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

            <p id="dollor-unique" ><span>AED</span> ${property.price.toLocaleString()}</p>
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