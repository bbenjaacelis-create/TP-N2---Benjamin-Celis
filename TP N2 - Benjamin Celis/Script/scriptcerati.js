document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // LÓGICA 1: EFECTO TRANSLÚCIDO DINÁMICO AL SCROLL
    // ==========================================
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


    // ==========================================
    // LÓGICA 2: MENÚ DESPLEGABLE HAMBURGUESA
    // ==========================================
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


    // ==========================================
    // LÓGICA 3: ANIMACIÓN DE REVELADO AL BAJAR LA PÁGINA
    // ==========================================
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


    // ==========================================
    // LÓGICA 4: IMAGEN CENTRAL QUE CAMBIA AL TOCARLA
    // ==========================================
    const clickImage = document.getElementById("ceratiClickImage");

    if (clickImage) {
        // Agregá o quitá rutas de fotos acá para sumar más imágenes al ciclo
        const ceratiImages = [
            "../src/img/Fotos/cerati1.jpg",
            "../src/img/Fotos/cerati2.jpg",
            "../src/img/Fotos/gustavo-LIEYY3AFZVCKLKUKB2GC57JUGE.jpg"
        ];

        let currentImageIndex = 0;

        clickImage.addEventListener("click", () => {
            currentImageIndex = (currentImageIndex + 1) % ceratiImages.length;

            clickImage.style.opacity = "0";
            setTimeout(() => {
                clickImage.src = ceratiImages[currentImageIndex];
                clickImage.style.opacity = "1";
            }, 250);
        });
    }


    // ==========================================
    // LÓGICA 5: REVELADO DE FOTO + TEXTO AL PASAR EL CURSOR POR LOS COSTADOS
    // Una vez revelado, queda visible de forma permanente (no se oculta)
    // ==========================================
    const hoverTriggers = document.querySelectorAll(".hover-trigger");

    hoverTriggers.forEach(trigger => {
        const targetId = trigger.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        if (!targetContent) return;

        trigger.addEventListener("mouseenter", () => {
            targetContent.classList.add("is-visible");
        });
    });
});