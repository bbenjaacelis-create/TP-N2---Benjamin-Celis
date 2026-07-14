document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.querySelector(".ibanez-header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


    const slides = document.querySelectorAll(".hero-slider-section .slide");
    let currentSlideIndex = 0;

    function changeSlide() {
        if (slides.length === 0) return;
        slides[currentSlideIndex].classList.remove("active");
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add("active");
    }

    if (slides.length > 1) {
        setInterval(changeSlide, 5000);
    }
    function setupInfiniteCarousel(trackId, directionSpeed) {
        const track = document.getElementById(trackId);
        if (!track) return;

        const cards = Array.from(track.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });

        let currentSpeed = directionSpeed;
        let scrollX = 0;

        function animate() {
            scrollX -= currentSpeed;
            const halfWidth = track.scrollWidth / 2;

            if (Math.abs(scrollX) >= halfWidth) {
                scrollX = 0;
            }

            track.style.transform = `translateX(${scrollX}px)`;
            document.miniTimelineId = requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);

        track.addEventListener("mouseenter", () => currentSpeed = 0);
        track.addEventListener("mouseleave", () => currentSpeed = directionSpeed);
    }

    setupInfiniteCarousel("carouselSoda", 1);
    setupInfiniteCarousel("carouselCerati", 1);

    const historyImage = document.querySelector(".history-image-half");
    const historyText = document.querySelector(".text-centered-content");

    const revealOptions = {
        root: null,
        threshold: 0.10
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            } else {
                entry.target.classList.remove("revealed");
            }
        });
    }, revealOptions);

    if (historyImage) revealObserver.observe(historyImage);
    if (historyText) revealObserver.observe(historyText);
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
});