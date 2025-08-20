import sharp from "sharp";

window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hanburgerid");
    const navList = document.querySelector(".navlists-header");
    const rightList = document.querySelector(".rightside-nav");

    let isMenuOpen = false;



    sharp("input.jpg")
        .webp({ quality: 80 })
        .toFile("output.webp");


    hamburger.addEventListener("click", () => {
        if (isMenuOpen && navList && rightList) {
            hamburger.src = "/public/assets/images/hanburger.png";
            hamburger.style.right = "3%";
            hamburger.style.top = "30%";
            navList.style.display = "none";
            rightList.style.display = "none";

        } else {
            hamburger.src = "/public/assets/images/close_small.png";
            hamburger.style.right = "3%";
            hamburger.style.top = "3%";
            hamburger.style.width = "13px";
            hamburger.style.opacity = 0.8;
            navList.style.display = "flex";
            rightList.style.display = "flex";
        }
        isMenuOpen = !isMenuOpen;
    });
    function closeMobileMenu() {
        const hamburger = document.getElementById("hanburgerid");
        const navList = document.querySelector(".navlists-header");
        const rightList = document.querySelector(".rightside-nav");

        // Reset hamburger icon
        hamburger.src = "/public/assets/images/hanburger.png";
        hamburger.style.right = "3%";
        hamburger.style.top = "30%";

        // Hide nav lists
        navList.style.display = "none";
        rightList.style.display = "none";

        isMenuOpen = false;
    }


    const categoryItems = document.querySelectorAll('#categoryList li');

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(li => li.classList.remove('active')); // Remove from all
            item.classList.add('active'); // Add to clicked
        });
    });


    document.getElementById('contact-usconnect').addEventListener('click', () => {
        const target = document.querySelector('.footer-aboveinformation');
        console.log(target); // check if it's null or valid
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 1024) {
                closeMobileMenu();
            }
        } else {
            console.warn('Target not found!');
        }
    });
    document.getElementById("logoimg").addEventListener("click", function () {
        const section = document.getElementById("herosection");
        const yOffset = -210; // adjust to match header height
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
    });

    function scrollWithOffset(id, offset = -140) {
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({ top: y, behavior: 'smooth' });

        if (window.innerWidth <= 1024) {
            closeMobileMenu();
        }
    }

    document.getElementById('nav-home').addEventListener('click', () => scrollWithOffset('herosection', -210));
    document.getElementById('nav-services').addEventListener('click', () => scrollWithOffset('services'));
    document.getElementById('nav-properties').addEventListener('click', () => scrollWithOffset('properties'));
    document.getElementById('nav-about').addEventListener('click', () => scrollWithOffset('about'));
    document.getElementById('nav-agents').addEventListener('click', () => scrollWithOffset('testimonials'));

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            // Reset mobile nav visibility and hamburger icon
            navList.style.display = 'flex';
            rightList.style.display = 'flex';
            hamburger.src = "/public/assets/images/hanburger.png";
            hamburger.style.right = "";
            hamburger.style.top = "";
            hamburger.style.width = "";
            hamburger.style.opacity = "";
            isMenuOpen = false;
        } else {
            // In mobile view, keep it hidden unless manually opened
            if (!isMenuOpen) {
                navList.style.display = 'none';
                rightList.style.display = 'none';
            }
        }
    });



});

