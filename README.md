# Armando Ibarra — Portfolio

Personal portfolio website built with React and Vite. Features a dark minimalist design, live GitHub pinned repositories, and downloadable CV in English and Spanish.

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **Fonts:** Inter + JetBrains Mono (Google Fonts) + Material Symbols

## Project Structure

```
├── public/
│   └── assets/
│       ├── cv-en.pdf
│       ├── cv-es.pdf
│       └── profile-image.jpeg
├── src/
│   ├── main.tsx          # Entry point
│   ├── App.tsx           # Root component
│   ├── globals.scss      # Global styles & resets
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TechStack.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── GithubSection.tsx
│   │   └── Footer.tsx
│   └── styles/
│       ├── _variables.scss
│       └── *.module.scss
├── index.html
└── vite.config.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |

## Sections

| Section | ID | Description |
|---|---|---|
| About / Hero | `#about` | Introduction, profile photo, CV download dropdown |
| Technical Stack | `#stack` | 18-card grid of tools and frameworks |
| Experience | `#cv` | Work timeline, education, certifications |
| AI Projects | `#projects` | 5 AI-powered personal projects |
| Open Source | `#github` | Live-fetched pinned repos via [Pinned API](https://pinned.berrysauce.dev) |

## Updating the CV

Replace `public/assets/cv-en.pdf` and `public/assets/cv-es.pdf` — the download buttons will pick up the new files automatically.

## Updating the Profile Photo

Replace `public/assets/profile-image.jpeg` with any JPEG image and keep the same filename.

## GitHub Pinned Repositories

Repos are fetched client-side from `https://pinned.berrysauce.dev/get/Strako` on page load. Update which repos appear by pinning them on your [GitHub profile](https://github.com/Strako).

## Deployment

The project is deployed on Netlify. The build config is in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```
