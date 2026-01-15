# Portfolio Website

Modern, minimal personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. Includes dark mode, page transitions, and data-driven sections.

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content updates

Edit the JSON data files to replace the placeholder content:

- `src/data/profile.json` (name, headline, bio, socials, stats)
- `src/data/projects.json` (project cards and tags)
- `src/data/experience.json` (timeline items and impact bullets)
- `src/data/skills.json` (skills grouped by category)

## Project structure

- `src/app` routes and layouts
- `src/components` reusable UI components
- `src/data` JSON and typed data exports
- `src/styles` theme and animation utilities

## Production build

```bash
npm run build
npm start
```

## Deployment

This project is ready for Vercel. Push to GitHub and import into Vercel, or run:

```bash
npx vercel
```
