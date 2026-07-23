# Nobody Knows What

A funny, modern landing page for random experiments, unfinished ideas, and tiny disasters that somehow work.

## What is inside

- Neo-brutalist “Controlled Chaos” visual direction
- Fully responsive desktop, tablet, and mobile layouts
- Interactive Chaos Generator
- Accessible navigation, focus states, and reduced-motion support
- Project cards, about section, call-to-action, and GitHub links
- Standard Next.js App Router setup with TypeScript

## Run locally

Requirements: Node.js 22.

```bash
npm install
npm run dev
```

Then open the local address shown in the terminal.

## Production build

```bash
npm run build
```

## Deploy to Vercel

1. Push the project files to a GitHub repository.
2. Import that repository in Vercel.
3. Keep **Framework Preset** set to `Next.js`.
4. Leave the build and output settings at their defaults.

No environment variables are required.

## Verify everything

```bash
npm run check
```

## Edit the page

- Main content: `app/page.tsx`
- Styling and responsive rules: `app/globals.css`
- Page title and description: `app/layout.tsx`

## GitHub button

The buttons currently link to:

`https://github.com/monirul-hasan06/nobody-knows-what`

If your repository URL is different, replace that URL in `app/page.tsx`.

---

Made with curiosity, questionable judgment, and Ctrl+Z.
