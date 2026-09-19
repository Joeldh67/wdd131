const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");
const header = document.querySelector("header");

// control the menu button and navigation menu
menuButton.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
    menuButton.classList.toggle("open");
    header.classList.toggle("open");
});

// inputs the current year in the footer
const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// inputs the last modified date and time in the footer
const lastModifiedParagraph = document.querySelector("#lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
}