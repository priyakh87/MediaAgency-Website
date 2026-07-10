# Micro Agency

A responsive agency portfolio website for web development, AI automation, and social media marketing.

## Stack

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

## Before publishing as your portfolio

- Replace the environment variables.
- Replace concept project descriptions with projects you actually built as those become available.
- Add real case-study links rather than inventing clients or results.
- Update the Open Graph image and site description if you change positioning.
- Test the contact email and calendar link.

## License

You may use and modify this project for your own portfolio and freelance business.
