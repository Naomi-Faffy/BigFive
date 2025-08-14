# Big Five Cars - Luxury Car Dealership Website

A sleek, modern website for Big Five Cars, Zimbabwe's premier luxury car dealership. Inspired by high-end automotive websites with a sophisticated black and red color palette.

## 🚗 Features

### Design & User Experience
- **Luxury Black & Red Theme**: Deep black (#000000) backgrounds with crimson red (#B30000) accents
- **Cinematic Hero Section**: Full-screen video background with compelling call-to-actions
- **Premium Typography**: Montserrat for headings, Lato for body text
- **Smooth Animations**: Hover effects, scroll animations, and transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices

### Functionality
- **Interactive Car Inventory**: Detailed car cards with specifications and features
- **Advanced Filtering**: Filter by make, model, year, and price range
- **Car Detail Modals**: Comprehensive vehicle information with specifications
- **Contact Forms**: Financing pre-approval and general inquiry forms
- **Smooth Navigation**: Fixed navbar with active section highlighting
- **Back-to-Top Button**: Easy navigation for long pages

### Sections
1. **Hero Section**: Compelling headline with video background
2. **Featured Cars**: Showcase of premium vehicles
3. **Complete Stock**: Full inventory with filtering options
4. **Financing**: Pre-approval forms and financing information
5. **About Us**: Company information and statistics
6. **Contact**: Contact form, location map, and business details

## 🎨 Color Palette

```css
--primary-black: #000000     /* Main background */
--crimson-red: #B30000       /* Accents, buttons, hover states */
--platinum-white: #FAFAFA    /* Text color */
--dark-gray: #1A1A1A         /* Section backgrounds */
--light-gray: #333333        /* Card backgrounds */
--hover-red: #CC0000         /* Hover effects */
--text-gray: #CCCCCC         /* Secondary text */
--border-gray: #2A2A2A       /* Borders and dividers */
```

## 📁 Project Structure

```
BigFive/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # Main stylesheet
├── js/
│   ├── cars-data.js          # Car inventory data
│   └── main.js               # Main JavaScript functionality
├── images/
│   ├── logo.svg              # Company logo
│   ├── showroom.svg          # Showroom placeholder
│   └── cars/                 # Car images directory
├── videos/                   # Hero video directory
├── generate-placeholders.html # Placeholder image generator
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development)

### Installation

1. **Clone or download** the project files to your local machine

2. **Set up a local web server** (required for proper functionality):
   
   **Option A: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Using Node.js**
   ```bash
   npx http-server
   ```
   
   **Option C: Using PHP**
   ```bash
   php -S localhost:8000
   ```

3. **Open your browser** and navigate to `http://localhost:8000`

### Adding Real Content

#### Car Images
1. Replace placeholder images in the `images/cars/` directory
2. Update image paths in `js/cars-data.js`
3. Use high-quality images (minimum 400x250px)
4. Optimize images for web (WebP format recommended)

#### Hero Video
1. Add a high-quality video file to the `videos/` directory
2. Update the video source in `index.html`:
   ```html
   <source src="videos/your-hero-video.mp4" type="video/mp4">
   ```

#### Car Inventory
1. Edit `js/cars-data.js` to add/modify car listings
2. Update car specifications, prices, and descriptions
3. Add new car categories as needed

#### Company Information
1. Update contact details in `index.html`
2. Modify the Google Maps embed with your actual location
3. Update social media links in the footer

## 🛠️ Customization

### Colors
Modify CSS variables in `css/styles.css`:
```css
:root {
    --primary-black: #000000;
    --crimson-red: #B30000;
    /* Add your custom colors */
}
```

### Typography
Update font imports in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

### Content
- Update company name, tagline, and descriptions
- Modify form fields and validation
- Add new sections or remove existing ones

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📈 Performance Optimization

### Images
- Use WebP format for better compression
- Implement lazy loading for car images
- Optimize image sizes for different screen resolutions

### JavaScript
- Minify JavaScript files for production
- Use CDN for external libraries
- Implement service workers for caching

### CSS
- Minify CSS files
- Use critical CSS for above-the-fold content
- Optimize font loading

## 🔒 Security Considerations

- Validate all form inputs on both client and server side
- Implement CSRF protection for forms
- Use HTTPS in production
- Sanitize user inputs to prevent XSS attacks

## 📧 Contact Forms

The website includes two main forms:
1. **Financing Form**: Pre-approval requests
2. **Contact Form**: General inquiries

Currently, forms show success messages without backend processing. To make them functional:

1. Set up a backend server (Node.js, PHP, Python, etc.)
2. Create form processing endpoints
3. Update form action attributes
4. Implement email sending functionality

## 🎯 SEO Optimization

- Update meta tags in `index.html`
- Add structured data for local business
- Optimize images with alt tags
- Create XML sitemap
- Implement Open Graph tags for social sharing

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repositories

### Traditional Hosting
- Upload files to your web server
- Ensure proper file permissions
- Configure redirects if needed

## 📞 Support

For questions or support regarding this website template:
- Check the documentation in this README
- Review the code comments for implementation details
- Test thoroughly before deploying to production

## 📄 License

This project is created for Big Five Cars. Modify and use according to your needs.

---

**Big Five Cars** - Drive Power. Own Prestige.