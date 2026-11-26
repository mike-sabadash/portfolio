# Mike Sabadash: portfolio

Static site, no build step. Live at https://design.bannermatic.online

- `index.html`: the whole page (GSAP + Lenis from CDN)
- `img2/`: case images, 1600x1000 webp, from behance.net/mikesabad
- `.github/workflows/deploy.yml`: every push to `main` deploys to the VPS

Deploy needs one repository secret, `BANNERMATIC_SERVER_SSH_KEY`: the same private key the Bannermatic deploy uses.
