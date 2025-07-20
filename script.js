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

// Popup functionality for LIVE DEMO buttons
function showDemoPopup() {
  // Create popup overlay
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;

  // Create popup content
  const popup = document.createElement('div');
  popup.className = 'popup-content';
  popup.style.cssText = `
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    max-width: 400px;
    margin: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transform: scale(0.7);
    transition: transform 0.3s ease;
    position: relative;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `;

  // Add content to popup
  popup.innerHTML = `
    <h3 style="margin: 0 0 15px 0; font-size: 1.5em; color: white;">🚀 Demo Coming Soon!</h3>
    <p style="margin: 0 0 20px 0; line-height: 1.6; color: rgba(255, 255, 255, 0.9);">
      This project demo is currently under development. 
      Please check back soon or visit the GitHub repository for more details!
    </p>
    <button class="popup-close-btn" style="
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      padding: 12px 28px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    ">Got it!</button>
  `;

  // Add close button functionality
  const closeBtn = popup.querySelector('.popup-close-btn');
  closeBtn.addEventListener('mouseenter', function() {
    this.style.background = 'rgba(255, 255, 255, 0.3)';
    this.style.transform = 'translateY(-2px)';
    this.style.borderColor = 'rgba(255, 255, 255, 0.5)';
  });
  closeBtn.addEventListener('mouseleave', function() {
    this.style.background = 'rgba(255, 255, 255, 0.2)';
    this.style.transform = 'translateY(0)';
    this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
  });

  // Close popup function
  function closePopup() {
    overlay.style.opacity = '0';
    popup.style.transform = 'scale(0.7)';
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  }

  // Add event listeners
  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      closePopup();
    }
  });

  // Add to page and animate in
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
  
  // Trigger animation
  setTimeout(() => {
    overlay.style.opacity = '1';
    popup.style.transform = 'scale(1)';
  }, 10);
}

// Add event listeners to all LIVE DEMO buttons
document.addEventListener('DOMContentLoaded', function() {
  const demoButtons = document.querySelectorAll('.project-btn');
  demoButtons.forEach(button => {
    const buttonText = button.textContent.trim().toLowerCase();
    if (buttonText.includes('demo') || buttonText.includes('live')) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        showDemoPopup();
      });
    }
  });
});
