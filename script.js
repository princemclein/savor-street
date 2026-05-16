/* Hamburger Menu Toggle */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

/* Find active nav link on scroll */
let links = document.querySelectorAll(".nav-links a");
let offset = 80;

window.addEventListener("scroll", () => {
  let y = window.scrollY + offset;
  links.forEach((l) => {
    let s = document.querySelector(l.hash);
    l.classList.toggle(
      "active",
      y >= s.offsetTop && y < s.offsetTop + s.offsetHeight,
    );
  });

  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
