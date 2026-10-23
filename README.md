# [filipchalupa.cz](https://filipchalupa.cz/)

Personal website built with Vite, React and Tailwind CSS.

```sh
npm install
npm run dev     # development server
npm run build   # prerendered static site in dist/
npm run preview # serve the build
```

Every page from `src/routes.tsx` is prerendered to its own `index.html` by
`scripts/prerender.js` and hydrated in the browser. Files in `public/`
(older standalone apps, `.well-known`, `CNAME`) are copied to the build as
they are.

Pushes to the `deploy` branch are deployed to GitHub Pages by
`.github/workflows/deploy.yml`, pushes to `main` and pull requests are only
built. To publish `main`:

```sh
git push origin main:deploy
```
