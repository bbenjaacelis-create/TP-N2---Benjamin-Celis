document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".ibanez-header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }


    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".header-nav");
    const navLinks = document.querySelectorAll(".nav-item a");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    const animatedElements = document.querySelectorAll(".scroll-animate");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            } else {
                entry.target.classList.remove("revealed");
            }
        });
    }, {
        root: null,
        threshold: 0.15
    });

    animatedElements.forEach(el => revealObserver.observe(el));
});