/* =========================================================
   MARWAR INFOTECH — PREMIUM JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.querySelector(".header");

    function handleHeaderScroll() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleHeaderScroll);

    handleHeaderScroll();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close menu when clicking a link */

        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight =
                document.querySelector(".header")?.offsetHeight || 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) {
            return;
        }

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");


            /* Close all other FAQs */

            faqItems.forEach(otherItem => {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                    const otherAnswer =
                        otherItem.querySelector(".faq-answer");

                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }

                }

            });


            /* Toggle current FAQ */

            if (isActive) {

                item.classList.remove("active");

                answer.style.maxHeight = null;

            } else {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".trust-card, " +
        ".founder-card, " +
        ".service-card, " +
        ".portfolio-card, " +
        ".why-item, " +
        ".process-card, " +
        ".review-card, " +
        ".faq-item, " +
        ".contact-info, " +
        ".contact-form"
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       STAGGER CARD ANIMATION
    ===================================================== */

    const cardGroups = [
        ".trust-grid",
        ".services-grid",
        ".portfolio-grid",
        ".process-grid",
        ".review-grid"
    ];

    cardGroups.forEach(selector => {

        const cards = document.querySelectorAll(
            `${selector} > *`
        );

        cards.forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 0.08}s`;

        });

    });


    /* =====================================================
       CONTACT FORM → WHATSAPP
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                this.querySelector('[name="name"]')?.value.trim();

            const phone =
                this.querySelector('[name="phone"]')?.value.trim();

            const email =
                this.querySelector('[name="email"]')?.value.trim();

            const message =
                this.querySelector('[name="message"]')?.value.trim();


            if (!name || !phone || !email || !message) {

                alert(
                    "Please fill in all the required fields."
                );

                return;

            }


            const whatsappNumber =
                "917691867621";


            const whatsappMessage =
`Hello Marwar Infotech,

I would like to discuss a website project.

Name: ${name}

Phone: ${phone}

Email: ${email}

Project Details:
${message}

Please contact me regarding my project.`;


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                )}`;


            window.open(
                whatsappURL,
                "_blank"
            );


            /* Optional form reset */

            contactForm.reset();

        });

    }


    /* =====================================================
       PHONE NUMBER VALIDATION
    ===================================================== */

    const phoneInput =
        document.querySelector('input[name="phone"]');

    if (phoneInput) {

        phoneInput.addEventListener("input", function () {

            this.value =
                this.value.replace(/\D/g, "");

        });

    }


    /* =====================================================
       PORTFOLIO EXTERNAL LINKS
    ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            '.portfolio-card a[target="_blank"]'
        );

    externalLinks.forEach(link => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            '.navbar a[href^="#"]'
        );


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =====================================================
       BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn-primary, " +
            ".btn-secondary, " +
            ".outline-btn, " +
            ".form-submit, " +
            ".nav-btn"
        );


    buttons.forEach(button => {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("button-ripple");

            const rect =
                this.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );

            ripple.style.width =
                `${size}px`;

            ripple.style.height =
                `${size}px`;

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;


            this.appendChild(ripple);


            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });


    /* =====================================================
       UPDATE COPYRIGHT YEAR
    ===================================================== */

    const footerYear =
        document.querySelector(
            ".footer-bottom p"
        );

    if (footerYear) {

        const currentYear =
            new Date().getFullYear();

        footerYear.innerHTML =
            `© ${currentYear} Marwar Infotech. All Rights Reserved.`;

    }


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener(
            "error",
            function () {

                this.style.opacity = "0.3";

                console.warn(
                    `Image not found: ${this.src}`
                );

            }
        );

    });


    /* =====================================================
       PREVENT EMPTY HASH JUMP
    ===================================================== */

    document.querySelectorAll(
        'a[href="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => event.preventDefault()
        );

    });


    /* =====================================================
       PAGE LOADED
    ===================================================== */

    document.body.classList.add("page-loaded");


    console.log(
        "Marwar Infotech website loaded successfully."
    );

});
