// Typing animation
const phrases = [
  "Web Developer",
  "App Developer",
  "UI UX Designer",
  "Full Stack"
];

let current = 0;
let charIndex = 0;
let isDeleting = false;
const animatedText = document.getElementById('animatedText');

function type() {
  const currentPhrase = phrases[current];
  const visibleText = isDeleting 
    ? currentPhrase.substring(0, charIndex--) 
    : currentPhrase.substring(0, charIndex++);

  animatedText.textContent = visibleText;

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    current = (current + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check on page load if dark mode is saved
if (localStorage.getItem('darkMode') === 'enabled') {
document.body.classList.add('dark-mode');
darkModeToggle.textContent = 'light_mode';
}

// Toggle Dark Mode on click
darkModeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');

if (document.body.classList.contains('dark-mode')) {
  darkModeToggle.textContent = 'light_mode'; // sun
  localStorage.setItem('darkMode', 'enabled');
} else {
  darkModeToggle.textContent = 'dark_mode'; // moon
  localStorage.setItem('darkMode', 'disabled');
}
});

// Search Toggle
const searchToggle = document.getElementById('search-toggle');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const searchSubmit = document.getElementById('search-submit');

searchToggle.addEventListener('click', () => {
searchBar.classList.toggle('active');
if (searchBar.classList.contains('active')) {
  searchInput.focus(); // Focus input
}
});

// Handle search action (example)
searchSubmit.addEventListener('click', () => {
const query = searchInput.value.trim();
if (query) {
  alert(`You searched for: ${query}`);
  searchBar.classList.remove('active');
}
});

searchInput.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    alert(`You searched for: ${query}`);
    searchBar.classList.remove('active');
  }
}
});

// Sidebar button functionality
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const downloadBtn = document.getElementById('download-btn');
const buyBtn = document.getElementById('buy-btn');

// Smooth scroll to next section
nextBtn.addEventListener('click', () => {
window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});

// Smooth scroll to top / previous section
backBtn.addEventListener('click', () => {
window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
});

// Download a file
downloadBtn.addEventListener('click', () => {
const link = document.createElement('a');
link.href = 'your-file-link-here.pdf'; // Replace with real file URL
link.download = 'Portfolio.pdf'; 
link.click();
});

// Redirect to buy page
buyBtn.addEventListener('click', () => {
window.location.href = 'https://your-buy-page-link.com'; // Not yet available
});
