const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".mobile-nav a");

menuToggle.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 30;
  header.style.background = scrolled
    ? "rgba(5, 11, 24, 0.88)"
    : "rgba(5, 11, 24, 0.72)";
});
