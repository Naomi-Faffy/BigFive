# Big Five Cars - Deployment Guide

## 🚀 Quick Start

### Local Development
1. Open a terminal in the project directory
2. Start a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

### Production Deployment

#### Option 1: Static Hosting (Recommended)

**Netlify (Free)**
1. Create account at netlify.com
2. Drag and drop the entire project folder
3. Your site will be live instantly
4. Custom domain available

**Vercel (Free)**
1. Create account at vercel.com
2. Connect your GitHub repository
3. Automatic deployments on push
4. Custom domain available

**GitHub Pages (Free)**
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Site available at username.github.io/repository-name

#### Option 2: Traditional Web Hosting

**Upload via FTP/SFTP**
1. Compress all files into a ZIP
2. Upload to your web server's public_html directory
3. Extract files on the server
4. Ensure proper file permissions (644 for files, 755 for directories)

## 📋 Pre-Deployment Checklist

### Content Updates
- [ ] Replace placeholder car images with high-quality photos
- [ ] Update company contact information
- [ ] Modify Google Maps embed with actual location
- [ ] Update social media links
- [ ] Add real car inventory data
- [ ] Replace hero video with actual footage

### Technical Optimizations
- [ ] Compress and optimize all images
- [ ] Minify CSS and JavaScript files
- [ ] Test on multiple browsers and devices
- [ ] Validate HTML and CSS
- [ ] Check all links and forms
- [ ] Test contact forms with backend integration

### SEO & Performance
- [ ] Update meta tags and descriptions
- [ ] Add structured data markup
- [ ] Optimize images with proper alt tags
- [ ] Create XML sitemap
- [ ] Set up Google Analytics
- [ ] Configure robots.txt

## 🔧 Backend Integration

### Contact Forms
The website includes two forms that need backend processing:

**Required Endpoints:**
- `POST /api/contact` - General contact form
- `POST /api/financing` - Financing pre-approval form

**Sample Node.js/Express Backend:**
```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, inquiryType, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Required fields missing' });
    }
    
    // Send email (configure your SMTP settings)
    const transporter = nodemailer.createTransporter({
        host: 'your-smtp-server.com',
        port: 587,
        secure: false,
        auth: {
            user: 'your-email@domain.com',
            pass: 'your-password'
        }
    });
    
    try {
        await transporter.sendMail({
            from: 'website@bigfivecars.co.zw',
            to: 'sales@bigfivecars.co.zw',
            subject: `New Contact Form Submission - ${inquiryType}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });
        
        res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Financing form endpoint
app.post('/api/financing', async (req, res) => {
    const { fullName, email, phone, income, downPayment } = req.body;
    
    // Process financing application
    // Send to CRM or email notification
    
    res.json({ success: true, message: 'Pre-approval request submitted' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

### Database Integration (Optional)
For storing inquiries and car inventory:

```sql
-- Contact inquiries table
CREATE TABLE contact_inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    inquiry_type VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Financing applications table
CREATE TABLE financing_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    annual_income VARCHAR(50),
    down_payment DECIMAL(10,2),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Car inventory table
CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    condition_status VARCHAR(20),
    mileage INT,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔒 Security Considerations

### Form Security
- Implement CSRF protection
- Validate and sanitize all inputs
- Use rate limiting to prevent spam
- Add reCAPTCHA to forms

### General Security
- Use HTTPS in production
- Set proper HTTP security headers
- Keep dependencies updated
- Implement proper error handling

### Example Security Headers
```javascript
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
});
```

## 📊 Analytics & Monitoring

### Google Analytics Setup
1. Create Google Analytics account
2. Add tracking code to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Set up uptime monitoring
- Track form conversion rates

## 🌐 Domain & SSL

### Domain Setup
1. Purchase domain from registrar
2. Point DNS to hosting provider
3. Configure A records and CNAME
4. Set up SSL certificate (Let's Encrypt recommended)

### SSL Certificate (Let's Encrypt)
```bash
# Using Certbot
sudo certbot --nginx -d bigfivecars.co.zw -d www.bigfivecars.co.zw
```

## 📱 Mobile Optimization

### Testing Checklist
- [ ] Test on iOS Safari
- [ ] Test on Android Chrome
- [ ] Check touch targets (minimum 44px)
- [ ] Verify form usability on mobile
- [ ] Test navigation menu functionality
- [ ] Check image loading and sizing

### Performance Optimization
- Implement lazy loading for images
- Use WebP format for better compression
- Minimize HTTP requests
- Enable gzip compression
- Use CDN for static assets

## 🔄 Maintenance

### Regular Updates
- Update car inventory monthly
- Check and fix broken links
- Update contact information as needed
- Monitor and respond to form submissions
- Backup website files and database

### Content Management
Consider implementing a simple CMS for non-technical users:
- WordPress integration
- Strapi headless CMS
- Custom admin panel

## 📞 Support & Troubleshooting

### Common Issues
1. **Forms not working**: Check backend endpoints and CORS settings
2. **Images not loading**: Verify file paths and permissions
3. **Mobile layout issues**: Test CSS media queries
4. **Slow loading**: Optimize images and enable compression

### Browser Compatibility
- Test in Chrome, Firefox, Safari, Edge
- Use autoprefixer for CSS compatibility
- Provide fallbacks for modern features

---

**Need Help?** Contact your web developer or refer to the main README.md file for additional information.