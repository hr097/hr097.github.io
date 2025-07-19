function toggleMenu() {
  const menu = document.querySelector(".mobile-menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.querySelector(".mobile-menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  
  if (menu.classList.contains("open") && 
      !hamburgerMenu.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

// Close menu on escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const menu = document.querySelector(".mobile-menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
    }
  }
});

// Scroll-based entrance animations
function animateOnScroll() {
  const animatedEls = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-scale');
  const observer = new window.IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  animatedEls.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', animateOnScroll);
