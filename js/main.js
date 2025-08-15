// Main JavaScript file for Big Five Car Sales website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen first
    initLoadingScreen();
    
    // Initialize all components after loading
    setTimeout(() => {
        initNavigation();
        initHero();
        initCarsDisplay();
        initForms();
        initAnimations();
        initScrollEffects();
        initParticles();
        initPremiumEffects();
        enhanceFormSubmissions();
    }, 2000);
});

// ===== NAVIGATION =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect and progress bar
    const scrollProgress = document.getElementById('scroll-progress');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update scroll progress bar
        if (scrollProgress) {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }
    });

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== HERO SECTION =====
function initHero() {
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    
    heroButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Create luxury particle effect
    createLuxuryParticles();
}

// Create floating luxury particles
function createLuxuryParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'luxury-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(3, 125, 182, ${Math.random() * 0.4 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: luxuryFloat ${Math.random() * 15 + 10}s linear infinite;
            pointer-events: none;
            z-index: 1;
        `;
        hero.appendChild(particle);
    }

    // Add luxury particle animation to CSS
    const luxuryParticleCSS = `
    @keyframes luxuryFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    `;

    // Inject particle CSS if not already added
    if (!document.getElementById('luxury-particles-css')) {
        const style = document.createElement('style');
        style.id = 'luxury-particles-css';
        style.textContent = luxuryParticleCSS;
        document.head.appendChild(style);
    }
}

// ===== CARS DISPLAY =====
function initCarsDisplay() {
    displayFeaturedCars();
}

function displayFeaturedCars() {
    const featuredGrid = document.getElementById('featured-cars-grid');
    if (!featuredGrid) return;

    featuredGrid.innerHTML = '';
    
    featuredCars.forEach((car, index) => {
        const carCard = createCarCard(car, index);
        featuredGrid.appendChild(carCard);
    });
}

function createCarCard(car, index) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="car-image">
            <img src="${car.image}" alt="${car.year} ${car.make} ${car.model}" loading="lazy">
            <div class="car-badge">${car.badge}</div>
        </div>
        <div class="car-info">
            <h3 class="car-title">${car.year} ${car.make} ${car.model}</h3>
            <div class="car-category">${car.badge}</div>
            <div class="car-price">${car.price}</div>
            <button class="view-details-btn" onclick="openCarDetails(${car.id})">View Details</button>
        </div>
    `;

    // Add hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });

    return card;
}

// ===== CAR DETAILS MODAL =====
function openCarDetails(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = createCarModalContent(car);
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Show modal
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close modal events
    const closeBtn = modal.querySelector('.modal-close');
    const modalOverlay = modal;
    
    closeBtn.addEventListener('click', closeCarModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeCarModal();
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeCarModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function createCarModalContent(car) {
    return `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <img src="${car.image}" alt="${car.year} ${car.make} ${car.model}" class="modal-car-image">
                <h2>${car.year} ${car.make} ${car.model}</h2>
                <div class="car-price">${car.price}</div>
                <div class="car-badge">${car.badge}</div>
            </div>
            <div class="modal-body">
                <div class="modal-description">
                    <h3>Description</h3>
                    <p>${car.description}</p>
                </div>
                <div class="modal-specs">
                    <h3>Specifications</h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <span class="spec-label">Engine:</span>
                            <span class="spec-value">${car.specs.engine}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Power:</span>
                            <span class="spec-value">${car.specs.power}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Torque:</span>
                            <span class="spec-value">${car.specs.torque}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Transmission:</span>
                            <span class="spec-value">${car.specs.transmission}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Drivetrain:</span>
                            <span class="spec-value">${car.specs.drivetrain}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">0-100km/h:</span>
                            <span class="spec-value">${car.specs.acceleration}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Top Speed:</span>
                            <span class="spec-value">${car.specs.topSpeed}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Fuel Consumption:</span>
                            <span class="spec-value">${car.specs.fuelConsumption}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-details">
                    <h3>Vehicle Details</h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <span class="spec-label">Exterior Color:</span>
                            <span class="spec-value">${car.exterior}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Interior:</span>
                            <span class="spec-value">${car.interior}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Mileage:</span>
                            <span class="spec-value">${car.mileage.toLocaleString()} km</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Condition:</span>
                            <span class="spec-value">${car.condition}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="requestTestDrive(${car.id})">Request Test Drive</button>
                <button class="btn btn-primary" onclick="contactAboutCar(${car.id})">Contact Us</button>
            </div>
        </div>
    `;
}

function closeCarModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }, 300);
    }
}

function requestTestDrive(carId) {
    const car = carsData.find(c => c.id === carId);
    showNotification(`Test drive request for ${car.year} ${car.make} ${car.model} submitted!`, 'success');
    closeCarModal();
}

function contactAboutCar(carId) {
    const car = carsData.find(c => c.id === carId);
    closeCarModal();
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Pre-fill contact form
        setTimeout(() => {
            const inquiryType = document.getElementById('inquiry-type');
            const message = document.getElementById('message');
            
            if (inquiryType) inquiryType.value = 'vehicle';
            if (message) message.value = `I'm interested in the ${car.year} ${car.make} ${car.model}. Please provide more information.`;
        }, 1000);
    }
}

// ===== FORMS =====
function initForms() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('.notification-styles')) {
        const styles = document.createElement('style');
        styles.className = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--dark-slate-blue);
                border-left: 4px solid var(--bright-sky-blue);
                border-radius: 5px;
                padding: 15px 20px;
                box-shadow: var(--shadow-medium);
                z-index: 10000;
                transform: translateX(400px);
                transition: var(--transition-smooth);
                max-width: 400px;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification.success {
                border-left-color: #28a745;
            }
            .notification.error {
                border-left-color: #dc3545;
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
            }
            .notification-message {
                color: var(--off-white);
                font-weight: 600;
            }
            .notification-close {
                background: none;
                border: none;
                color: var(--light-grey);
                font-size: 20px;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .notification-close:hover {
                color: var(--bright-sky-blue);
            }
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                    transform: translateY(-100px);
                }
                .notification.show {
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 300);
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.car-card, .service-card, .testimonial-card, .contact-item, .section-title, .hero-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.car-card, .service-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('#featured').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== PREMIUM LOADING SCREEN =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 2000);
}

// ===== PREMIUM PARTICLES =====
function initParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
    
    // Continuously create new particles
    setInterval(() => {
        if (Math.random() > 0.7) {
            createParticle(particlesContainer);
        }
    }, 2000);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 25000);
}

// ===== PREMIUM EFFECTS =====
function initPremiumEffects() {
    // Add premium sound effects (optional)
    addSoundEffects();
    
    // Enhanced form validation
    enhanceFormValidation();
    
    // Premium hover effects
    addPremiumHoverEffects();
}

function addSoundEffects() {
    // Create audio context for subtle UI sounds
    const buttons = document.querySelectorAll('.btn, .view-details-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Subtle hover sound effect (optional)
            playHoverSound();
        });
        
        button.addEventListener('click', () => {
            // Click sound effect (optional)
            playClickSound();
        });
    });
}

function playHoverSound() {
    // Create a subtle hover sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Silently fail if audio context is not supported
    }
}

function playClickSound() {
    // Create a subtle click sound
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
    } catch (e) {
        // Silently fail if audio context is not supported
    }
}

function enhanceFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateInput(input);
            });
            
            input.addEventListener('input', () => {
                clearValidationState(input);
            });
        });
    });
}

function validateInput(input) {
    const isValid = input.checkValidity();
    
    if (isValid && input.value.trim() !== '') {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else if (!isValid && input.value.trim() !== '') {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}

function clearValidationState(input) {
    input.classList.remove('valid', 'invalid');
}

function addPremiumHoverEffects() {
    // Add magnetic effect to buttons
    const buttons = document.querySelectorAll('.btn, .view-details-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

// ===== PREMIUM NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info', duration = 4000) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        ${message}
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // Auto hide
    setTimeout(() => {
        hideNotification(notification);
    }, duration);
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 400);
}

// Enhanced form submission with notifications
function enhanceFormSubmissions() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            
            // Reset form after successful submission
            setTimeout(() => {
                form.reset();
            }, 1000);
        });
    });
}

// Make functions globally available
window.openCarDetails = openCarDetails;
window.requestTestDrive = requestTestDrive;
window.contactAboutCar = contactAboutCar;