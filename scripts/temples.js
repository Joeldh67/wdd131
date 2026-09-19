const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");
const header = document.querySelector("header");

// Control de apertura y cierre del menú
menuButton.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
    menuButton.classList.toggle("open");
    header.classList.toggle("open");
});

// Año de copyright actual
const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Fecha y hora de última modificación
const lastModifiedParagraph = document.querySelector("#lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
}