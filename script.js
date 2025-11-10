// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
    }
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll("section, .project-card, .card");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add("show");
  });
}
revealElements.forEach(el => el.classList.add("hidden"));
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
