# JMS Orchestra Homepage

## Project Overview
Static HTML/CSS website for the Junge Münchner Symphoniker orchestra, hosted on GitHub Pages with custom domain.

## Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS variables, flexbox/grid
- **Vanilla JavaScript** - Mobile menu, gallery lightbox
- **Fonts** - Google Fonts (Playfair Display, Inter)
- **Hosting** - GitHub Pages with custom domain

## Project Structure
```
jms-homepage/
├── index.html              # Homepage
├── ueber-uns.html          # About page
├── konzerte.html           # Concerts page
├── galerie.html            # Gallery page
├── mitspielen.html         # Join page
├── kontakt.html            # Contact page
├── impressum.html          # Legal page
├── datenschutz.html        # Privacy page
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # Mobile menu, lightbox
├── images/
│   └── ...                 # All images
├── CNAME                   # Custom domain
└── .nojekyll               # Disable Jekyll
```

## Pages
- **Home** (index.html): Hero, next concert, about preview, testimonials, join CTA
- **About** (ueber-uns.html): Orchestra info, stats, conductor bio
- **Concerts** (konzerte.html): Upcoming events, past concert archive
- **Gallery** (galerie.html): Photo grid with lightbox
- **Join** (mitspielen.html): Benefits, instruments needed, rehearsal info
- **Contact** (kontakt.html): Address, phone, email (mailto link)
- **Legal** (impressum.html, datenschutz.html): Required legal pages

## Color Scheme
- Primary yellow: #F5C518
- Dark gold: #D4A017
- Text dark: #0f172a
- Text muted: #475569
- Background light: #f8fafc

## Development
No build step required. Open HTML files directly in browser to preview.

## Deployment
1. Push to main branch
2. GitHub Pages serves automatically
3. Custom domain: junge-muenchner-symphoniker.de
