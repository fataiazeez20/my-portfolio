// Wait until the HTML document has finished loading
document.addEventListener("DOMContentLoaded", () => {

    // Welcome button
    const welcomeButton = document.getElementById("welcome-btn");

    if (welcomeButton) {
        welcomeButton.addEventListener("click", () => {
            welcomeButton.textContent = "Thanks for visiting! 👋";

            setTimeout(() => {
                welcomeButton.textContent = "Say Hello";
            }, 3000);
        });
    }


    // Highlight the navigation link for the current section
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll("nav a");

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
