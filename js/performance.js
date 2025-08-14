// Performance optimization and lazy loading for Big Five Cars website

document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initImageOptimization();
    initPerformanceMonitoring();
});

// ===== LAZY LOADING =====
function initLazyLoading() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        // Observe all lazy images
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without Intersection Observer
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
        });
    }
}

// ===== IMAGE OPTIMIZATION =====
function initImageOptimization() {
    // Check WebP support
    function supportsWebP() {
        return new Promise(resolve => {
            const webP = new Image();
            webP.onload = webP.onerror = () => {
                resolve(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    }

    // Replace images with WebP versions if supported
    supportsWebP().then(supported => {
        if (supported) {
            document.querySelectorAll('img').forEach(img => {
                if (img.src && !img.src.includes('.svg')) {
                    const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
                    // Check if WebP version exists
                    const testImg = new Image();
                    testImg.onload = () => {
                        img.src = webpSrc;
                    };
                    testImg.src = webpSrc;
                }
            });
        }
    });
}

// ===== PERFORMANCE MONITORING =====
function initPerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
        // This would require the web-vitals library
        // import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';
        
        // getCLS(console.log);
        // getFID(console.log);
        // getFCP(console.log);
        // getLCP(console.log);
        // getTTFB(console.log);
    }

    // Basic performance monitoring
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        
        console.log('Performance Metrics:', {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
            totalLoadTime: perfData.loadEventEnd - perfData.fetchStart
        });
    });
}

// ===== PRELOAD CRITICAL RESOURCES =====
function preloadCriticalResources() {
    const criticalImages = [
        'images/logo.svg',
        'images/hero-poster.svg'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ===== SERVICE WORKER REGISTRATION =====
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// ===== CRITICAL CSS LOADING =====
function loadNonCriticalCSS() {
    const nonCriticalCSS = [
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    ];

    nonCriticalCSS.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print';
        link.onload = function() {
            this.media = 'all';
        };
        document.head.appendChild(link);
    });
}

// ===== RESOURCE HINTS =====
function addResourceHints() {
    const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
    ];

    hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
preloadCriticalResources();
addResourceHints();
loadNonCriticalCSS();

// Uncomment to enable service worker
// registerServiceWorker();