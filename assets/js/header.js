let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Only trigger the header behavior if we've scrolled more than the threshold
    if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
        if (currentScroll > lastScrollTop && currentScroll > 300) {
            // Scrolling down
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
        } else {
            // Scrolling up
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        lastScrollTop = currentScroll;
    }
}); 