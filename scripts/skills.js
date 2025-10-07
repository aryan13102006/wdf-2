// ========================
// SKILLS PAGE JAVASCRIPT
// ========================

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate skill bars when they come into view
                if (entry.target.classList.contains('skill-card')) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const progress = progressBar.getAttribute('data-progress');
                        setTimeout(() => {
                            progressBar.style.width = progress + '%';
                        }, 200);
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(element => {
        observer.observe(element);
    });

    // Stagger animations for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });

    // Stagger animations for tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });

    // Stagger animations for soft skills
    const softSkills = document.querySelectorAll('.soft-skill-item');
    softSkills.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Stagger animations for learning cards
    const learningCards = document.querySelectorAll('.learning-card');
    learningCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
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
