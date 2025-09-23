const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Active Navigation Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements for animation
const animateElements = document.querySelectorAll('.timeline-item, .experience-card, .project-card, .skills-category, .stat');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Skills Progress Animation
const skillsSection = document.querySelector('#skills');
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            skillsAnimated = true;
            skillBars.forEach(bar => {
                const skill = bar.getAttribute('data-skill');
                bar.style.width = skill + '%';
            });
        }
    });
});

skillsObserver.observe(skillsSection);

// Typing Animation for Hero Section
const heroTitle = document.querySelector('.hero-text h1');
const titleText = heroTitle.innerHTML;
heroTitle.innerHTML = '';

let index = 0;
function typeWriter() {
    if (index < titleText.length) {
        heroTitle.innerHTML += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

 
// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show success message (in a real application, you would send this to a server)
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-text p');
if (footerYear) {
    footerYear.innerHTML = `&copy; ${currentYear} Anurag Kumar. All rights reserved.`;
}

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(backToTopBtn);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effects for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) rotateY(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateY(0)';
    });
});

// Text reveal animation
const revealText = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const textObserver = new IntersectionObserver(revealText, {
    threshold: 0.1
});

const textElements = document.querySelectorAll('p, h2, h3, li');
textElements.forEach(text => {
    text.style.opacity = '0';
    text.style.transform = 'translateY(20px)';
    text.style.transition = 'all 0.6s ease';
    textObserver.observe(text);
});

// Theme Toggle (Optional - for future enhancement)
const createThemeToggle = () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    toggleBtn.className = 'theme-toggle';
    toggleBtn.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #6366f1;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        transform: translateY(-50%);
    `;
    
    document.body.appendChild(toggleBtn);
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = toggleBtn.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
};

// Initialize theme toggle (uncomment to enable)
// createThemeToggle();

// Performance optimization - Lazy loading for images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Add custom cursor effect (optional enhancement)
const addCustomCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #6366f1;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        opacity: 0;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseout', () => {
        cursor.style.opacity = '0';
    });
};


// Console greeting message
console.log(`
    🚀 Welcome to Anurag Kumar's Portfolio!
    
    Thanks for checking out the code!
    If you're interested in collaborating or have any questions,
    feel free to reach out at anuragkumar880081@gmail.com
    
    Built with: HTML, CSS, JavaScript
    Focus: Performance, Accessibility, Modern Design
`);

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully! 🎉');
});