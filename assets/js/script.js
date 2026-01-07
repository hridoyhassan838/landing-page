//Handles mobile hamburger menu toggle and menu link clicks.
const navMenu = document.getElementById('navToggle');
const navItems = document.getElementById('navLinks');

navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navItems.classList.toggle('active');
});

// close menu on link click
const allLinks = document.querySelectorAll('.nav-links');

allLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navItems.classList.remove('active');
  });
});

// navigation smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// add background when scrolling
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.style.backgroundColor = '#000000';
    header.style.transition = '0.5s ease';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
