// ========================
// ABOUT PAGE JAVASCRIPT
// ========================

document.addEventListener('DOMContentLoaded', function() {
    // Stagger animations for about cards
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Stagger animations for detail items
    const detailItems = document.querySelectorAll('.detail-item');
    detailItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Stagger animations for value cards
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(element => {
        observer.observe(element);
    });

    // Add parallax effect to page header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const pageHeader = document.querySelector('.page-header');
        
        if (pageHeader && scrolled < window.innerHeight) {
            pageHeader.style.transform = `translateY(${scrolled * 0.5}px)`;
            pageHeader.style.opacity = 1 - (scrolled / 500);
        }
    });
});
