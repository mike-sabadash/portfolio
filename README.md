# Mike Sabadash: portfolio

Personal portfolio. React + Vite + Tailwind + Framer Motion, smooth scroll with Lenis.
Live at https://design.bannermatic.online

- `src/sections`: home page sections (Hero, About, Work, Disciplines, Built by me, Music, Experience)
- `src/data/projects.ts`: case studies
- `public/work`: case images (from behance.net/mikesabad), `public/music`: INDIKA visuals, `public/logos`: client logos
- `.github/workflows/deploy.yml`: every push to `main` builds and deploys to the VPS (needs `BANNERMATIC_SERVER_SSH_KEY`)

Local: `npm ci && npm run dev`
