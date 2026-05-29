# Armando Ibarra — Portfolio

Personal portfolio website built with Next.js 15 and SCSS. Features a dark minimalist design, live GitHub pinned repositories, and downloadable CV in English and Spanish.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **Fonts:** Inter + JetBrains Mono (Google Fonts) + Material Symbols

## Project Structure

```
app/
├── public/
│   └── assets/
│       ├── cv-en.pdf          # English CV
│       ├── cv-es.pdf          # Spanish CV
│       └── profile-image.jpeg
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.scss
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── TechStack.tsx
    │   ├── Experience.tsx
    │   ├── Projects.tsx
    │   ├── GithubSection.tsx
    │   └── Footer.tsx
    └── styles/
        ├── _variables.scss
        └── *.module.scss
```

## Getting Started

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sections

| Section | ID | Description |
|---|---|---|
| About / Hero | `#about` | Introduction, profile photo, CV download dropdown |
| Technical Stack | `#stack` | 18-card grid of tools and frameworks |
| Experience | `#cv` | Work timeline, education, certifications |
| AI Projects | `#projects` | 5 AI-powered personal projects |
| Open Source | `#github` | Live-fetched pinned repos via [Pinned API](https://pinned.berrysauce.dev) |

## Updating the CV

Replace the files at `app/public/assets/cv-en.pdf` and `app/public/assets/cv-es.pdf` — the download buttons will pick up the new files automatically.

## Updating the Profile Photo

Replace `app/public/assets/profile-image.jpeg` with any JPEG image and keep the same filename.

## GitHub Pinned Repositories

Repos are fetched at build time from `https://pinned.berrysauce.dev/get/Strako` with a 5-minute revalidation cache. Update which repos are pinned directly on your [GitHub profile](https://github.com/Strako).

## Build

```bash
cd app
npm run build
npm run start
```
