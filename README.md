# Raj Panchal - Portfolio Website

A modern, professional, and production-ready personal portfolio website for a final-year engineering student.

## 🚀 Tech Stack

- **React (Vite)** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Contact form functionality

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📩 EmailJS Setup

To make the contact form work, you need to configure EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Message content

4. Update the placeholders in `src/components/Contact.jsx`:
   ```javascript
   const SERVICE_ID = 'YOUR_SERVICE_ID'
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```

## 📄 Resume

Place your resume PDF as `public/resume.pdf`

## 🌐 Deployment (Netlify)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy!

## 🎨 Features

- ✅ Modern dark theme (#0b0f19)
- ✅ Blue (#3b82f6) + Cyan (#22d3ee) accent colors
- ✅ Glassmorphism cards
- ✅ Subtle glow effects
- ✅ Smooth animations with Framer Motion
- ✅ Fully responsive (mobile + desktop)
- ✅ Typing animation in hero section
- ✅ Marquee effect for skills
- ✅ Hover effects on projects
- ✅ Working contact form with EmailJS
- ✅ Deployment-ready for Netlify

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Your resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact form with EmailJS
│   │   ├── Hero.jsx        # Hero with typing animation
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Projects.jsx    # Projects showcase
│   │   └── Skills.jsx      # Skills with marquee effect
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎯 Sections

1. **Hero** - Name, typing animation, resume button, animated tech cards
2. **About** - Personal introduction and statistics
3. **Skills** - Horizontal scrolling marquee with tech icons
4. **Projects** - 2-column grid with hover effects (Fleet-Flow featured)
5. **Contact** - Working form with EmailJS integration

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- No overflow issues
- Proper spacing and typography

## ⚡ Performance

- Optimized animations
- Lazy loading for images
- Smooth scrolling
- No heavy effects

## 📝 Notes

- Node version: 20 (specified in package.json)
- All placeholder images use Unsplash
- Replace project images with your own screenshots
- Update contact information in Contact component

---

Made with ❤️ by Raj Panchal
