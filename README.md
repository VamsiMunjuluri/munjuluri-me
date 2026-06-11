# munjuluri-me

A lightweight personal portfolio landing page built with **Next.js**, **React**, **Tailwind CSS**, and a **Cal.com booking embed**.

## Overview

This repository contains a single-page portfolio site for Vamsi Munjuluri. The site features:

- Full-screen hero landing experience
- Animated SVG ring around a portrait
- Hover swap effect between two portrait images
- External links to developer and photography portfolios
- Cal.com booking button for scheduling
- Fixed top navigation and footer
- Vercel Analytics integration

## Technology stack

- Next.js 16
- React 18
- Tailwind CSS 3
- Cal.com embed (`@calcom/embed-react`)
- Vercel Analytics (`@vercel/analytics`)

## Project structure

- `src/app/`
  - `layout.js` — global layout, page metadata, `Navbar`, and `Footer`
  - `page.js` — home page content and hero section
  - `globals.css` — global styles and Tailwind imports
- `src/components/`
  - `ui/navbar.jsx` — logo and booking embed trigger
  - `ui/footer.jsx` — page footer
  - `CalEmbed.jsx` — Cal.com embed initialization and button
- `public/images/` — static image and favicon assets
- `jsconfig.json` — path alias configuration for `@/*`
- `next.config.mjs` — default Next.js config

## Getting started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build and production

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — build the app for production
- `npm start` — run the production server
- `npm run lint` — run the Next.js linter

## Notes

- The app uses the Next.js app router and Tailwind CSS for styling.
- `next.config.mjs` is currently empty and uses default Next.js behavior.
- The site is focused on a single landing page and can be easily extended with additional routes or sections.

## Future improvements

Potential enhancements include:

- Adding portfolio sections for projects, photography, and contact
- Improving accessibility and SEO metadata
- Adding dark mode support
- Adding more app routes under `src/app/`
- Including automated tests

## License

This repository is private.
