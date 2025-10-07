// ========================
// HOME PAGE JAVASCRIPT
// ========================

document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for subtitle
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const texts = [
            'CSE Student | B.Tech | Tech Enthusiast',
            'Passionate Learner | Problem Solver',
            'Future Software Developer',
            'Code. Learn. Grow.'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                // Pause at end of text
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        // Start typing animation
        setTimeout(type, 1000);
    }

    // Profile image error handling
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.addEventListener('error', function() {
            // Create a colorful gradient placeholder if image doesn't load
            this.style.display = 'none';
            const container = this.parentElement;
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 8rem;
                color: white;
                border: 5px solid rgba(108, 99, 255, 0.3);
            `;
            placeholder.textContent = '👨‍💻';
            container.appendChild(placeholder);
        });
    }

    // Animate stat numbers on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach((stat, index) => {
        stat.style.animationDelay = `${index * 0.1}s`;
        statsObserver.observe(stat);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const animatedBg = document.querySelector('.animated-bg');
        
        if (animatedBg && scrolled < window.innerHeight) {
            animatedBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add stagger animation to hero elements
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });

    // Smooth entrance for stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease forwards`;
        card.style.animationDelay = `${1.5 + (index * 0.1)}s`;
    });
});
