// Configuration file for Big Five Cars website
// Modify these settings to customize the website

const siteConfig = {
    // Company Information
    company: {
        name: "Big Five Cars",
        tagline: "Drive Power. Own Prestige.",
        description: "Zimbabwe's premier destination for luxury automotive excellence.",
        established: "2004",
        
        // Contact Details
        contact: {
            phone: "+263 4 123 4567",
            mobile: "+263 77 123 4567",
            email: "info@bigfivecars.co.zw",
            salesEmail: "sales@bigfivecars.co.zw",
            address: {
                street: "123 Luxury Drive",
                suburb: "Borrowdale",
                city: "Harare",
                country: "Zimbabwe",
                full: "123 Luxury Drive, Borrowdale, Harare, Zimbabwe"
            }
        },
        
        // Business Hours
        hours: {
            weekdays: "8:00 AM - 6:00 PM",
            saturday: "9:00 AM - 4:00 PM",
            sunday: "By Appointment"
        },
        
        // Social Media
        social: {
            facebook: "https://facebook.com/bigfivecars",
            instagram: "https://instagram.com/bigfivecars",
            twitter: "https://twitter.com/bigfivecars",
            linkedin: "https://linkedin.com/company/bigfivecars",
            youtube: "https://youtube.com/bigfivecars"
        }
    },
    
    // Website Settings
    website: {
        title: "Big Five Cars - Drive Power. Own Prestige.",
        metaDescription: "Zimbabwe's premier luxury car dealership. Experience the world's most exclusive collection of luxury automobiles.",
        keywords: "luxury cars, Zimbabwe, car dealership, premium vehicles, Mercedes, BMW, Audi, Lexus, Toyota, Range Rover, Porsche",
        author: "Big Five Cars",
        
        // Google Analytics (replace with your tracking ID)
        googleAnalytics: "GA_TRACKING_ID",
        
        // Google Maps embed (replace with your location)
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.4!2d31.0!3d-17.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ4JzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2szw!4v1234567890"
    },
    
    // Theme Colors
    colors: {
        primary: "#B30000",      // Crimson red
        primaryHover: "#CC0000", // Hover red
        background: "#000000",   // Deep black
        surface: "#1A1A1A",     // Dark gray
        card: "#333333",        // Light gray
        text: "#FAFAFA",        // Platinum white
        textSecondary: "#CCCCCC", // Text gray
        border: "#2A2A2A"       // Border gray
    },
    
    // Typography
    fonts: {
        primary: "'Montserrat', sans-serif",
        secondary: "'Lato', sans-serif",
        sizes: {
            heroTitle: "4.5rem",
            sectionTitle: "3rem",
            cardTitle: "1.4rem",
            body: "1rem"
        }
    },
    
    // Animation Settings
    animations: {
        duration: "0.3s",
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        stagger: 0.1 // seconds between staggered animations
    },
    
    // Features Toggle
    features: {
        lazyLoading: true,
        serviceWorker: false, // Set to true to enable offline caching
        performanceMonitoring: true,
        smoothScroll: true,
        backToTop: true,
        mobileMenu: true
    },
    
    // Form Settings
    forms: {
        // Set these to your actual form processing endpoints
        contactEndpoint: "/api/contact",
        financingEndpoint: "/api/financing",
        
        // Form validation messages
        messages: {
            required: "This field is required",
            email: "Please enter a valid email address",
            phone: "Please enter a valid phone number",
            success: "Thank you! We'll get back to you soon.",
            error: "Sorry, there was an error. Please try again."
        }
    },
    
    // Car Inventory Settings
    inventory: {
        itemsPerPage: 12,
        featuredCount: 6,
        imageQuality: 85, // JPEG quality percentage
        placeholderColor: "#1a1a1a",
        
        // Available filter options
        filters: {
            makes: ["mercedes", "bmw", "audi", "lexus", "toyota", "range-rover", "porsche"],
            years: [2024, 2023, 2022, 2021, 2020],
            priceRanges: [
                { label: "Under $50,000", value: "0-50000" },
                { label: "$50,000 - $100,000", value: "50000-100000" },
                { label: "$100,000 - $200,000", value: "100000-200000" },
                { label: "$200,000+", value: "200000+" }
            ]
        }
    },
    
    // Performance Settings
    performance: {
        imageFormats: ["webp", "jpg", "png"],
        lazyLoadOffset: "50px",
        cacheVersion: "v1",
        preloadImages: [
            "images/logo.svg",
            "images/hero-poster.svg"
        ]
    },
    
    // SEO Settings
    seo: {
        siteName: "Big Five Cars",
        locale: "en_ZW",
        type: "website",
        twitterCard: "summary_large_image",
        ogImage: "images/og-image.jpg", // Create this image (1200x630px)
        
        // Structured data
        structuredData: {
            "@context": "https://schema.org",
            "@type": "AutoDealer",
            "name": "Big Five Cars",
            "description": "Zimbabwe's premier luxury car dealership",
            "url": "https://bigfivecars.co.zw",
            "telephone": "+263 4 123 4567",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Luxury Drive",
                "addressLocality": "Borrowdale",
                "addressRegion": "Harare",
                "addressCountry": "ZW"
            },
            "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-16:00"
            ]
        }
    }
};

// Export configuration for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
} else if (typeof window !== 'undefined') {
    window.siteConfig = siteConfig;
}