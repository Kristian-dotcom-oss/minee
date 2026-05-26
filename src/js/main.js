const slides = document.querySelectorAll('.solutions-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    // Remove all previous position states
    slide.classList.remove('active', 'prev', 'next');
    
    if (index === currentIndex) {
      slide.classList.add('active');
    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    } else if (index === (currentIndex + 1) % slides.length) {
      slide.classList.add('next');
    }
  });
}

// Control listeners
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

// Initialize placements on load
updateSlider();

function toggleChip(chip) {
  // Option A: Single-choice selection behavior
  const siblings = chip.parentElement.children;
  for (let i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove('active');
  }
  chip.classList.add('active');
  
  // Option B: If you prefer multi-select capability instead, comment out lines 3-6 and use:
  // chip.classList.toggle('active');
}

const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // 1. Close the mobile menu
      menuToggle.checked = false; 

      // 2. Remove the 'active' class from whichever link currently has it
      document.querySelector('.nav-links a.active')?.classList.remove('active');

      // 3. Add the 'active' class to the link that was just clicked
      this.classList.add('active');
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  // 1. Target your specific sections and custom nav link class
  // Make sure your HTML sections actually have id="hero", id="solutions", etc.
  const sections = document.querySelectorAll("#hero, #solutions, #about, #projects, #contact");
  const navLinks = document.querySelectorAll(".js-nav-link");

  // 2. Configure the observer
  const observerOptions = {
    root: null, // Uses the browser viewport
    rootMargin: "-30% 0px -50% 0px", // Triggers when a section takes up the center of the screen
    threshold: 0
  };

  // 3. Define the tracking logic
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Check if the section has entered the screen's sweet spot
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          // Remove the active class from all links
          link.classList.remove("active");
          
          // Add the active class back only to the matching link
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  // 4. Start watching your sections
  sections.forEach((section) => {
    if (section) observer.observe(section);
  });
});
