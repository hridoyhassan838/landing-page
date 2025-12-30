// Slider functionality
const sliderWrapperImages = [
  'assets/images/gym1.png',
  'assets/images/gym2.png',
  'assets/images/gym3.png',
  'assets/images/gym4.png',
];

function controlsSlider() {
  // Get all elements
  const sliderWrapperControls = document.getElementById(
    'sliderWrapperControls'
  );
  const sliderIndicatorControls = document.getElementById('indicatorControls');
  const prevBtnControls = document.getElementById('controlsPrevBtn');
  const nextBtnControls = document.getElementById('controlsNextBtn');

  let currentIndex = 0;

  // Create slider images
  sliderWrapperImages.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Gym image ${index + 1}`;
    img.classList.add('slider-image');
    sliderWrapperControls.appendChild(img);

    // Create indicators
    const indicator = document.createElement('div');
    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
    indicator.addEventListener('click', () => goToSlide(index));
    sliderIndicatorControls.appendChild(indicator);
  });

  // Update slider function
  function updateSlider() {
    sliderWrapperControls.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicator active class
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderWrapperImages.length;
    updateSlider();
  }

  // Previous slide
  function prevSlide() {
    currentIndex =
      (currentIndex - 1 + sliderWrapperImages.length) %
      sliderWrapperImages.length;
    updateSlider();
  }

  // Event listeners
  prevBtnControls.addEventListener('click', prevSlide);
  nextBtnControls.addEventListener('click', nextSlide);

  // Auto-play functionality
  let autoplayInterval = setInterval(nextSlide, 5000);

  // Pause autoplay on hover
  sliderWrapperControls.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });

  // Resume autoplay when mouse leaves
  sliderWrapperControls.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });
}

controlsSlider();
