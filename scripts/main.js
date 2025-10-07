// ========================
// MAIN JAVASCRIPT FILE
// ========================

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');

    // Toggle mobile menu
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Set active nav link based on current page
    setActiveNavLink();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Intersection Observer for animations
function createObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(element => {
        observer.observe(element);
    });
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createObserver);
} else {
    createObserver();
}

// Utility function to add animation delays
function staggerAnimation(selector, delay = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * delay}ms`;
    });
}

// Page load animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Prevent animation on page reload
window.addEventListener('beforeunload', function() {
    document.body.classList.add('loading');
});
