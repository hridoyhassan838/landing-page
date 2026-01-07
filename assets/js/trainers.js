const trainers = [
  {
    name: 'Victoria Shurpik',
    image: 'assets/images/trainer-1.png',
    social: { instagram: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Elizabeth Lavrinenko',
    image: 'assets/images/trainer-2.png',
    social: { instagram: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Ivan Gladkikh',
    image: 'assets/images/trainer-3.png',
    social: { instagram: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Vladislav Kovalenko',
    image: 'assets/images/trainer-4.png',
    social: { instagram: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Olga Kovalenko',
    image: 'assets/images/trainer-5.png',
    social: { instagram: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Dmitry Petrov',
    image: 'assets/images/trainer-6.png',
    social: { instagram: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Anna Volkova',
    image: 'assets/images/trainer-7.png',
    social: { instagram: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Mikhail Sokolov',
    image: 'assets/images/trainer-8.png',
    social: { instagram: '#', twitter: '#', youtube: '#' },
  },
];

// ✅ Create a single reusable function (Card + Render + Animation)
function renderTrainers() {
  const trainersGrid = document.getElementById('trainersGrid');

  trainersGrid.innerHTML = trainers
    .map(
      (t) => `
      <div class="trainer-card">
        <img src="${t.image}" alt="${t.name}">
        <h3>${t.name}</h3>
        <div class="social-links">
          <a href="${t.social.instagram}" class="social-icon">
            <img src="assets/images/icons/instagram.png" alt="Instagram">
          </a>
          <a href="${t.social.twitter}" class="social-icon">
            <img src="assets/images/icons/twitter.png" alt="Twitter">
          </a>
          <a href="${t.social.youtube}" class="social-icon">
            <img src="assets/images/icons/youtube.png" alt="YouTube">
          </a>
        </div>
      </div>
    `
    )
    .join('');

  // ScrollReveal animation
  ScrollReveal().reveal('.trainer-card', {
    delay: 300,
    distance: '35px',
    origin: 'bottom',
    interval: 150,
    scale: 0.9,
  });
}

// Run automatically after document load
document.addEventListener('DOMContentLoaded', renderTrainers);
