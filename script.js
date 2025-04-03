// Glitter Animation
const createGlitter = () => {
    const container = document.querySelector('.glitter-container');
    const glitterCount = 50; // Number of glitter particles

    for (let i = 0; i < glitterCount; i++) {
        const glitter = document.createElement('div');
        glitter.className = 'glitter';
        
        // Random starting position
        glitter.style.left = `${Math.random() * 100}%`;
        glitter.style.animationDelay = `${Math.random() * 3}s`;
        
        // Random size
        const size = Math.random() * 4 + 2;
        glitter.style.width = `${size}px`;
        glitter.style.height = `${size}px`;
        
        container.appendChild(glitter);
    }
};

// Initialize glitter
createGlitter();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// Add CSS for fade animations
const style = document.createElement('style');
style.textContent = `
    .fade-out {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Mobile navigation toggle
const createMobileNav = () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    
    // Add hamburger to nav
    nav.appendChild(hamburger);
    
    // Add mobile nav styles
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        @media (max-width: 768px) {
            .hamburger {
                display: block;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0.5rem;
            }
            
            .hamburger span {
                display: block;
                width: 25px;
                height: 3px;
                background-color: var(--primary-color);
                margin: 5px 0;
                transition: all 0.3s ease;
            }
            
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--white);
                padding: 1rem;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            
            .nav-links.active {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(mobileStyles);
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
};

// Initialize mobile navigation
createMobileNav(); 