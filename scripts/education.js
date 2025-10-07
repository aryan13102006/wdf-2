// ========================
// EDUCATION PAGE JAVASCRIPT
// ========================

document.addEventListener('DOMContentLoaded', function() {
    // Stagger animations for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });

    // Stagger animations for course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });

    // Stagger animations for stat boxes
    const statBoxes = document.querySelectorAll('.stat-box');
    statBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.1}s`;
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

    // Animate timeline line on scroll
    const timeline = document.querySelector('.timeline');
    const timelineLine = document.querySelector('.timeline::before');
    
    window.addEventListener('scroll', function() {
        if (timeline) {
            const timelineRect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (timelineRect.top < windowHeight && timelineRect.bottom > 0) {
                const scrollProgress = Math.min(
                    1,
                    Math.max(0, (windowHeight - timelineRect.top) / timelineRect.height)
                );
                timeline.style.setProperty('--timeline-progress', scrollProgress);
            }
        }
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
