document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Welcome Button
    // =========================

    const welcomeButton = document.getElementById("welcome-btn");

    if (welcomeButton) {
        welcomeButton.addEventListener("click", () => {

            welcomeButton.textContent = "Thanks for visiting! 👋";

            setTimeout(() => {
                welcomeButton.textContent = "Say Hello";
            }, 3000);

        });
    }


    // =========================
    // Active Navigation Link
    // =========================

    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    });

});
