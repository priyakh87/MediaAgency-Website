# Micro Agency
A modern, responsive website developed for a media agency client as part of a freelance project. The goal was to create a fast, visually engaging, and user-friendly website that effectively showcases the agency's services, portfolio, and brand identity while providing a seamless experience across desktop and mobile devices.

Project Overview

This project was designed and developed to help the client establish a strong online presence with a clean, modern interface and optimized performance. The website focuses on responsive layouts, intuitive navigation, and reusable UI components to ensure scalability and maintainability.

Features
Responsive, mobile-first design
Modern and clean user interface
Landing page with engaging hero section
Services and portfolio showcase
Reusable and modular component architecture
Optimized performance and fast loading
Cross-browser compatibility
SEO-friendly structure
Smooth user interactions and animations


Tech Stack

- React
- TypeScript
- Vite
- Plain CSS
- Inline SVG icons and logo
- No paid assets or image dependencies

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Configure your contact links

1. Copy `.env.example` to `.env`.
2. Replace the values with your real email and profile links.

```bash
cp .env.example .env
```

Available variables:

```env
VITE_CONTACT_EMAIL=hello@yourdomain.com
VITE_CALENDAR_URL=https://cal.com/your-username
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
VITE_INSTAGRAM_URL=https://www.instagram.com/your-profile
```

The included form uses `mailto:` because this is a static frontend project. For real form submissions, connect it to Formspree, Netlify Forms, Supabase, Firebase, or your own API endpoint.

## Deploy to GitHub Pages

The repository includes `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main`. The workflow will build and publish the site.

The Vite `base` is configured as `./`, so it works in a project repository path without editing the repository name.

## Other deployment options

### Vercel

- Import the GitHub repository.
- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.

### Netlify

- Import the GitHub repository.
- Build command: `npm run build`.
- Publish directory: `dist`.


Disclaimer

This repository represents the frontend implementation developed for a freelance client. Any proprietary business information, content, branding assets, or confidential project details have been excluded or anonymized where appropriate.