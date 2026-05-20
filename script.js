/* Hamburger */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-links a");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

/* Active nav on scroll */
window.addEventListener("scroll", () => {
  const y = window.scrollY + 80;

  navLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (!section) return;
    link.classList.toggle(
      "active",
      y >= section.offsetTop && y < section.offsetTop + section.offsetHeight,
    );
  });

  /* Scroll to top button */
  scrollToTopBtn.classList.toggle("show", window.scrollY > 300);
});

/* Scroll to top */
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
