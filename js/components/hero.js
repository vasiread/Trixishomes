window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hanburgerid");
    const navList = document.querySelector(".navlists-header");
    const rightList = document.querySelector(".rightside-nav");

    let isMenuOpen = false;

    // Hamburger toggle
    hamburger.addEventListener("click", () => {
        if (isMenuOpen) {
            hamburger.src = "/public/assets/images/hanburger.png";
            hamburger.style.right = "5%";
            hamburger.style.top = "40%";
            navList.style.display = "none";
            rightList.style.display = "none";
        } else {
            hamburger.src = "/public/assets/images/close_small.png";
            hamburger.style.right = "5%";
            hamburger.style.top = "7%";
            hamburger.style.width = "13px";
            hamburger.style.opacity = 0.8;
            navList.style.display = "flex";
            rightList.style.display = "flex";
        }
        isMenuOpen = !isMenuOpen;
    });

    function closeMobileMenu() {
        hamburger.src = "/public/assets/images/hanburger.png";
        hamburger.style.right = "3%";
        hamburger.style.top = "30%";

        navList.style.display = "none";
        rightList.style.display = "none";

        isMenuOpen = false;
    }

    // Navigation click handlers
    function scrollWithOffset(id, offset = -140) {
        const element = document.getElementById(id);
        if (!element) return;
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        if (window.innerWidth <= 1024) closeMobileMenu();
    }

    document.getElementById('nav-home')?.addEventListener('click', () => scrollWithOffset('herosection', -210));
    document.getElementById('nav-services')?.addEventListener('click', () => scrollWithOffset('services'));
    document.getElementById('nav-properties')?.addEventListener('click', () => scrollWithOffset('properties'));
    document.getElementById('nav-about')?.addEventListener('click', () => scrollWithOffset('about'));
    document.getElementById('nav-agents')?.addEventListener('click', () => scrollWithOffset('testimonials'));

    document.getElementById('contact-usconnect')?.addEventListener('click', () => {
        const target = document.querySelector('.footer-aboveinformation');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 1024) closeMobileMenu();
        }
    });

    document.querySelector("#logoimg img")?.addEventListener("click", function () {
        const section = document.getElementById("herosection");
        if (!section) return;
        const yOffset = -210;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    });

    // Handle resizing
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            navList.style.display = 'flex';
            rightList.style.display = 'flex';
            hamburger.src = "/public/assets/images/hanburger.png";
            hamburger.style.right = "";
            hamburger.style.top = "";
            hamburger.style.width = "";
            hamburger.style.opacity = "";
            isMenuOpen = false;
        } else if (!isMenuOpen) {
            navList.style.display = 'none';
            rightList.style.display = 'none';
        }
    });
});
