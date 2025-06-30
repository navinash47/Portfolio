// DOM Elements
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const scrollProgress = document.querySelector('.scroll-progress');
const header = document.querySelector('header');

// Theme Switcher
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    mainNav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
}

// Smooth Scrolling
function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    // Close mobile menu if open
    mainNav.classList.remove('active');
    mobileMenuBtn.classList.remove('active');

    // Smooth scroll to section
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Close mobile menu when clicking outside
function handleOutsideClick(e) {
    if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
}

// Handle scroll events
let lastScroll = 0;
function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    console.log('currentScroll', currentScroll);
    console.log('lastScroll', lastScroll);
    
    // Hide/show header based on scroll direction
    if (currentScroll > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    
    // Update scroll progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
    console.log('scrolled', scrolled);
    console.log('winScroll', winScroll);
    console.log('height', height);
    
    lastScroll = currentScroll;
}

// Event Listeners
toggleSwitch.addEventListener('change', switchTheme);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
navLinks.forEach(link => link.addEventListener('click', smoothScroll));
document.addEventListener('click', handleOutsideClick);
window.addEventListener('scroll', handleScroll); 