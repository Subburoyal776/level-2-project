
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Toggle the mobile navigation menu
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after clicking a navigation link
document.querySelectorAll("#navMenu .nav-link, #navMenu .btn")
  .forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

// Automatically display the current year
document.getElementById("year").textContent =
  new Date().getFullYear();
