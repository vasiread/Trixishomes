window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hanburgerid");
    const navList = document.querySelector(".navlists-header");
    const rightList = document.querySelector(".rightside-nav");

    let isMenuOpen = false;

    hamburger.addEventListener("click", () => {
        if (isMenuOpen && navList && rightList) {
            hamburger.src = "./assets/images/hanburger.png";
            hamburger.style.right = "3%";
            hamburger.style.top = "30%";
            navList.style.display = "none";
            rightList.style.display = "none";

        } else {
            hamburger.src = "./assets/images/close_small.png";
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
        hamburger.src = "./assets/images/hanburger.png";
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

    document.getElementById('nav-home').addEventListener('click', () => {
        document.getElementById('herosection').scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 1024) {
            closeMobileMenu();
        }
    });

    document.getElementById('nav-services').addEventListener('click', () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 1024) {
            closeMobileMenu();
        }
    });

    document.getElementById('nav-properties').addEventListener('click', () => {
        document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 1024) {
            closeMobileMenu();
        }
    });

    document.getElementById('nav-about').addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 1024) {
            closeMobileMenu();
        }
    });

    document.getElementById('nav-agents').addEventListener('click', () => {
        document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 1024) {
            closeMobileMenu();
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            // Reset mobile nav visibility and hamburger icon
            navList.style.display = 'flex';
            rightList.style.display = 'flex';
            hamburger.src = "./assets/images/hanburger.png";
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

 