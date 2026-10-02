/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen.toString()
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // Close mobile menu after clicking a link

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.querySelector(".header");

function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section"
    );

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("back-to-top");

function updateBackToTop() {

    if (!backToTop) {
        return;
    }

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

}

window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);

if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");

if (contactForm && formMessage) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById("name")
                    .value
                    .trim();

            const email =
                document.getElementById("email")
                    .value
                    .trim();

            const message =
                document.getElementById("message")
                    .value
                    .trim();


            /* Basic validation */

            if (!name || !email || !message) {

                formMessage.textContent =
                    "Please complete all fields.";

                formMessage.style.color =
                    "#dc2626";

                return;

            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                formMessage.style.color =
                    "#dc2626";

                return;

            }


            /*
                This form currently performs
                frontend validation only.

                A backend or form service is
                required for real email delivery.
            */

            formMessage.textContent =
                "Thanks for reaching out. Your message has been prepared successfully.";

            formMessage.style.color =
                "#16a34a";


            contactForm.reset();

        }
    );

}


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;

            const targetPosition =
                target.offsetTop -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        }
    );

});


/* =========================================================
   INITIAL PAGE STATE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateHeader();
        updateActiveNavigation();
        updateBackToTop();

    }
);