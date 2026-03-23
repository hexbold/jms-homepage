# JMS Homepage

Static HTML/CSS website for the Junge Münchner Symphoniker orchestra.

## Development

No build step required. Open `index.html` in your browser to view the site.

For local development with live reload, you can use any static server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve
```

## Deployment

The site is hosted on GitHub Pages with a custom domain.

1. Push changes to the `main` branch
2. GitHub Pages automatically deploys

## Project Structure

```
├── index.html          # Homepage
├── ueber-uns.html      # About page
├── konzerte.html       # Concerts page
├── galerie.html        # Gallery page
├── mitspielen.html     # Join page
├── kontakt.html        # Contact page
├── impressum.html      # Legal page
├── datenschutz.html    # Privacy page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Mobile menu, lightbox
├── images/             # All images
├── CNAME               # Custom domain config
└── .nojekyll           # Disable Jekyll processing
```
