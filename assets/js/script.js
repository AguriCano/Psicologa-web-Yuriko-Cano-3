// FAQ Toggle
function toggleFaq(button) {
  const item = button.parentElement;
  item.classList.toggle("active");
}

// Close FAQ when clicking outside
document.addEventListener("click", function (event) {
  if (!event.target.closest(".faq-item")) {
    document.querySelectorAll(".faq-item.active").forEach((item) => {
      item.classList.remove("active");
    });
  }
});

// Form Validation (Basic)
document
  .getElementById("contact-form-element")
  .addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Por favor ingresa un correo válido");
      e.preventDefault();
      return false;
    }
  });

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Intersection Observer for fade-in animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document
  .querySelectorAll(".feature-card, .testimonial-card, .faq-item")
  .forEach((el) => {
    observer.observe(el);
  });
