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

