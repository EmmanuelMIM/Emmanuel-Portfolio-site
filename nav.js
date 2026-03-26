const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle 'active' class when hamburger clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll(".nav-links button").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});