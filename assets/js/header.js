let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    console.log('currentScroll', currentScroll);
    console.log('lastScrollTop', lastScrollTop);
    
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Scrolling down
        header.classList.add('header-hidden');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
    }
    lastScrollTop = currentScroll;
}); 