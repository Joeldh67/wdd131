// inputs the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// inputs the last modified date in the footer
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;