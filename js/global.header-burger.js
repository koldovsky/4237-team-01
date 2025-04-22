// Get DOM elements
const burger = document.querySelector(".header__burger-menu");
const nav = document.querySelector(".header__nav");
const ul = document.querySelector(".header__menu");
const contacts = document.querySelector(".header__contacts");
const menuLinks = document.querySelectorAll(".header__menu-link");

// Toggle menu function
function toggleMenu() {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-open");
  ul.classList.toggle("is-open");
  contacts.classList.toggle("is-open-contact");
  document.body.classList.toggle("no-scroll");
}

function closeMenu() {
  burger.classList.remove("is-active");
  nav.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}

// Add click event listener to burger button
burger.addEventListener("click", toggleMenu);

// Add click event listeners to all menu links
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// івент для посилання якоря, щоб працював з будь якої .html
window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
});